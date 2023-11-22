const conductNegotiations = [
    // Your provided array...
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

const getDriversLicense = [
    {
        step: 1,
        description: "Check eligibility requirements",
        note: "Ensure you meet the age, residency, and other criteria set by your local authority."
    },
    {
        step: 2,
        description: "Study for the written test",
        note: "Familiarize yourself with the rules of the road, traffic signals, and safety practices."
    },
    {
        step: 3,
        description: "Pass the written test",
        note: "Take the test at your local DMV or equivalent authority to get your learner's permit."
    },
    {
        step: 4,
        description: "Practice driving",
        note: "Accumulate experience under the supervision of a licensed adult driver."
    },
    {
        step: 5,
        description: "Enroll in a driving school",
        note: "Optional but recommended, especially for new drivers to receive professional training."
    },
    {
        step: 6,
        description: "Schedule the road test",
        note: "Once ready, book a driving test appointment with your local driving authority."
    },
    {
        step: 7,
        description: "Pass the road test",
        note: "Demonstrate your driving skills, including vehicle control, adherence to rules, and safety practices."
    },
    {
        step: 8,
        description: "Apply for the driver's license",
        note: "After passing the road test, complete the necessary paperwork to receive your driver's license."
    }
];


document.addEventListener('DOMContentLoaded', function() {
    populateActivities();
    setupDragAndDrop();
    document.getElementById('undoButton').addEventListener('click', undoLastStep);
});

document.addEventListener('DOMContentLoaded', function() {
    populateActivities();
    setupDragAndDrop();
    document.getElementById('undoButton').addEventListener('click', undoLastStep);
});

function populateActivities() {
    const activitySelector = document.getElementById('activitySelector');
    const activities = {
        'Conduct Negotiations': conductNegotiations,
        'Make Peanut Butter Sandwich': makePeanutButterSandwich
    };

    for (const [activityName, steps] of Object.entries(activities)) {
        const option = document.createElement('option');
        option.value = activityName;
        option.textContent = activityName;
        activitySelector.appendChild(option);
    }

    // Event listener for when a new activity is selected
    activitySelector.addEventListener('change', function() {
        loadActivity(activities[this.value]);
    });
}

// ... (previous code)

function loadActivity(steps) {
    // Clear previous content
    const stepsContainer = document.getElementById('stepsContainer');
    const descriptionsContainer = document.getElementById('descriptionsContainer');
    stepsContainer.innerHTML = '';
    descriptionsContainer.innerHTML = '';

    // Create numbered boxes for steps
    steps.forEach(step => {
        const stepBox = document.createElement('div');
        stepBox.classList.add('stepBox');
        stepBox.id = `step-${step.step}`;
        stepBox.textContent = `Step ${step.step}`;
        stepsContainer.appendChild(stepBox);
    });

    // Shuffle and create description boxes
    const shuffledSteps = [...steps].sort(() => 0.5 - Math.random());
    shuffledSteps.forEach(step => {
        const descriptionBox = document.createElement('div');
        descriptionBox.classList.add('descriptionBox');
        descriptionBox.draggable = true;
        descriptionBox.id = `description-${step.step}`;
        descriptionBox.textContent = step.description;
        descriptionsContainer.appendChild(descriptionBox);

        // Add drag and drop event listeners
        descriptionBox.addEventListener('dragstart', handleDragStart);
        // You will need to implement handleDragStart and other related drag and drop functions
    });
}

// ... (previous code)


let lastAction = null;

function setupDragAndDrop() {
    const stepsContainer = document.getElementById('stepsContainer');
    const descriptionsContainer = document.getElementById('descriptionsContainer');
    
    descriptionsContainer.addEventListener('dragstart', handleDragStart, false);
    stepsContainer.addEventListener('dragover', handleDragOver, false);
    stepsContainer.addEventListener('drop', handleDrop, false);
}

function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}

function handleDragOver(event) {
    event.preventDefault(); // Necessary for allowing a drop
}

function handleDrop(event) {
    event.preventDefault();

    const draggedId = event.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);
    const targetElement = event.target.closest('.stepBox');

    if (targetElement && draggedElement) {
        const originalParent = draggedElement.parentElement;

        targetElement.appendChild(draggedElement);
        updateBoxColor(targetElement, draggedElement);

        lastAction = {
            type: 'move',
            element: draggedElement,
            from: originalParent,
            to: targetElement
        };
    }
}

function updateBoxColor(stepBox, descriptionBox) {
    const stepNumber = parseInt(descriptionBox.id.replace('description-', ''));
    if (stepBox.id === `step-${stepNumber}`) {
        stepBox.style.background = 'lightgreen';
    } else {
        stepBox.style.background = 'red';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    populateActivities();
    setupDragAndDrop();
    document.getElementById('undoButton').addEventListener('click', undoLastStep);
});
