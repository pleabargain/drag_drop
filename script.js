document.addEventListener('DOMContentLoaded', () => {
    const arraySelector = document.getElementById('arraySelector');
    const descriptionsContainer = document.getElementById('descriptionsContainer');
    const stepsContainer = document.getElementById('stepsContainer');
    const undoButton = document.getElementById('undoButton');
    const completedSteps = document.getElementById('completedSteps');

    // Define the arrays
    const conductNegotiations = [
        {
            step: 1,
            description: "Identify and clarify your objectives",
            note: "Know what you want to achieve from these negotiations."
        },
        {
            step: 2,
            description: "Research the other party",
            note: "Understand their needs, strengths, and weaknesses."
        },
        {
            step: 3,
            description: "Prepare your negotiation strategy",
            note: "Plan your approach, including your opening offer and concessions you're willing to make."
        },
        {
            step: 4,
            description: "Set up a meeting",
            note: "Choose a neutral location that is convenient for both parties."
        },
        {
            step: 5,
            description: "Build rapport",
            note: "Start with small talk to establish a positive atmosphere."
        },
        {
            step: 6,
            description: "Present your case clearly",
            note: "Explain your position and why it is beneficial for both parties."
        },
        {
            step: 7,
            description: "Listen actively",
            note: "Pay close attention to the other party's responses and concerns."
        },
        {
            step: 8,
            description: "Negotiate towards a win-win solution",
            note: "Aim for an agreement that benefits both sides."
        },
        {
            step: 9,
            description: "Handle objections",
            note: "Be prepared to address and resolve any issues raised by the other party."
        },
        {
            step: 10,
            description: "Finalize the agreement",
            note: "Ensure all parties understand and agree to the terms before concluding."
        },
        {
            step: 11,
            description: "Follow up",
            note: "Send a summary of the agreement and next steps to all involved parties."
        }
    ];
    
    
    const makePeanutButterSandwich = [
        {
            step: 1,
            description: "get out bread",
            note: "Have to get the bread out!"
        },
        {
            step: 2,
            description: "get out knife or spoon",
            note: "you could use your fingers of course but a knife or spoon is probably better"
        },
        {
            step: 3,
            description: "get out peanut butter",
            note: "crunchy or smooth? your choice"
        },
        {
            step: 4,
            description: "get out jelly",
            note: "grape or strawberry? your choice"
        },
        {
            step: 5,
            description: "get out plate",
            note: "you could eat it out of the jar but that's not very classy"
        },
        {
            step: 6,
            description: "get out napkin",
            note: "you don't want to get peanut butter and jelly on your clothes"
        },
        {
            step: 7,
            description: "get out glass",
            note: "you need something to drink with your sandwich"
        },
        {
            step: 8,
            description: "get out milk",
            note: "you could use water but milk is better"
        },
        {
            step: 9,
            description: "prepare sandwich",
            note: "put peanut butter on one slice of bread and jelly on the other slice of bread"
        }
    ];
    

    let currentArray = [];
    let stepsOrder = [];

    // Function to initialize the activity based on the selected array
    function initializeActivity() {
        // Clear previous content
        descriptionsContainer.innerHTML = '';
        stepsContainer.innerHTML = '';
        completedSteps.innerHTML = '';
        stepsOrder = [];

        // Get the selected array
        const selectedArray = arraySelector.value;
        currentArray = eval(selectedArray);

        // Populate the descriptions in random order
        currentArray
            .sort(() => Math.random() - 0.5)
            .forEach(item => {
                const div = document.createElement('div');
                div.className = 'draggable';
                div.draggable = true;
                div.textContent = item.description;
                div.setAttribute('data-step', item.step);
                descriptionsContainer.appendChild(div);
            });

        // Create step boxes
        for (let i = 1; i <= currentArray.length; i++) {
            const box = document.createElement('div');
            box.className = 'stepBox';
            box.id = `step-${i}`;
            stepsContainer.appendChild(box);
        }

        // Add drag and drop event listeners
        addDragAndDropListeners();
    }

    // Function to add drag and drop event listeners
    function addDragAndDropListeners() {
        const draggables = document.querySelectorAll('.draggable');
        const stepBoxes = document.querySelectorAll('.stepBox');

        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging');
            });

            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
                // Check if placed in correct step
                checkStep(draggable);
            });
        });

        stepBoxes.forEach(box => {
            box.addEventListener('dragover', e => {
                e.preventDefault();
                const afterElement = getDragAfterElement(box, e.clientY);
                const draggable = document.querySelector('.dragging');
                if (afterElement == null) {
                    box.appendChild(draggable);
                } else {
                    box.insertBefore(draggable, afterElement);
                }
            });
        });
    }

    // Function to get the element after which the draggable should be inserted
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    // Function to check if the step is correctly placed
    function checkStep(draggable) {
        const parentBox = draggable.parentNode;
        const stepNumber = parseInt(parentBox.id.split('-')[1]);
        const draggableStep = parseInt(draggable.getAttribute('data-step'));

        if (stepNumber === draggableStep) {
            parentBox.classList.add('correct');
            const note = currentArray.find(item => item.step === draggableStep).note;
            completedSteps.textContent += `${draggable.textContent} - ${note}\n`;
            stepsOrder.push(draggableStep);
            undoButton.disabled = false;
        }
    }

    // Function to undo the last step
    undoButton.addEventListener('click', () => {
        if (stepsOrder.length > 0) {
            const lastStep = stepsOrder.pop();
            const lastStepBox = document.getElementById(`step-${lastStep}`);
            lastStepBox.classList.remove('correct');
            lastStepBox.innerHTML = '';
            completedSteps.textContent = completedSteps.textContent.split('\n').slice(0, -2).join('\n');
            undoButton.disabled = stepsOrder.length === 0;
        }
    });

    // Initialize the activity when the selected array changes
    arraySelector.addEventListener('change', initializeActivity);

    // Initial setup
    initializeActivity();
});

