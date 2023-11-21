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
    
    const manageScrumProject = [
        {
          step: 1,
          description: "Define the project goals and scope",
          note: "Clearly outline the objectives and boundaries of the project to ensure everyone is on the same page.",
        },
        {
          step: 2,
          description: "Assemble the Scrum team",
          note: "Form a cross-functional team with the necessary skills and expertise to deliver the project successfully.",
        },
        {
          step: 3,
          description: "Create the product backlog",
          note: "Compile a prioritized list of user stories or features that represent the project's deliverables.",
        },
        {
          step: 4,
          description: "Plan the first sprint",
          note: "During the sprint planning meeting, select a subset of items from the product backlog to be completed in the upcoming sprint.",
        },
        {
          step: 5,
          description: "Conduct daily stand-up meetings",
          note: "Hold daily 15-minute meetings where each team member updates their progress and identifies any roadblocks.",
        },
        {
          step: 6,
          description: "Work on sprint tasks",
          note: "The team focuses on completing the selected sprint tasks, collaborating closely and adapting to any changes that arise.",
        },
        {
          step: 7,
          description: "Conduct sprint review",
          note: "At the end of the sprint, demonstrate the completed work to stakeholders and gather feedback.",
        },
        {
          step: 8,
          description: "Conduct sprint retrospective",
          note: "Hold a meeting to reflect on the sprint, identify areas for improvement, and implement necessary changes.",
        },
        {
          step: 9,
          description: "Repeat steps 4-8 until the project is complete",
          note: "Iterate through sprints, continuously delivering value and adapting to evolving requirements.",
        },
      ];

      const familyMorningRoutine = [
        {
          step: 1,
          description: "Set alarms and prepare the night before",
          note: "Ensure everyone has an alarm set and prepare essentials like lunches, backpacks, and work clothes the night before to minimize morning rush."
        },
        {
          step: 2,
          description: "Wake up early and get everyone out of bed",
          note: "Allow ample time for everyone to get ready without feeling rushed."
        },
        {
          step: 3,
          description: "Prepare breakfast together",
          note: "Make breakfast a family affair to encourage connection and shared responsibility."
        },
        {
          step: 4,
          description: "Get dressed and ready for the day",
          note: "Establish a designated area for getting ready to avoid clutter and promote efficiency."
        },
        {
          step: 5,
          description: "Pack lunches and backpacks",
          note: "Involve children in packing their own lunches to foster independence and reduce morning stress."
        },
        {
          step: 6,
          description: "Leave for work and school",
          note: "Plan your commute to avoid delays and establish a drop-off routine for children."
        },
        {
          step: 7,
          description: "Set up a dedicated work area at home",
          note: "Create a workspace that is free from distractions and conducive to productivity."
        },
        {
          step: 8,
          description: "Communicate work schedules and family needs",
          note: "Ensure everyone is aware of work schedules and family needs to coordinate household responsibilities."
        },
        {
          step: 9,
          description: "Plan dinner together",
          note: "Involve everyone in planning dinner to promote healthy eating habits and shared responsibility."
        },
        {
          step: 10,
          description: "Prepare dinner together",
          note: "Make dinner preparation a family activity to strengthen bonds and encourage participation."
        },
        {
          step: 11,
          description: "Eat dinner together as a family",
          note: "Make dinnertime a priority for connecting and sharing experiences as a family."
        },
        {
          step: 12,
          description: "Clean up together and prepare for bedtime",
          note: "Involve everyone in cleaning up to foster a sense of responsibility and teamwork."
        },
        {
          step: 13,
          description: "Spend quality time together as a family",
          note: "Dedicate time for relaxation and bonding, such as reading stories, playing games, or watching family-friendly movies."
        },
        
      ];

      const workFromHomeDay = [
        {
          step: 1,
          description: "Establish a dedicated workspace",
          note: "Designate a specific area in your home as your workspace to minimize distractions and maintain focus.",
        },
        {
          step: 2,
          description: "Set a clear work schedule",
          note: "Establish regular working hours and stick to them as much as possible to maintain productivity and structure.",
        },
        {
          step: 3,
          description: "Prioritize tasks and create a daily to-do list",
          note: "Identify the most important tasks for the day and break them down into smaller, manageable steps to stay on track.",
        },
        {
          step: 4,
          description: "Minimize distractions and interruptions",
          note: "Turn off notifications, close unnecessary tabs, and inform family or housemates of your working hours to minimize disruptions.",
        },
        {
          step: 5,
          description: "Take regular breaks and maintain a healthy work-life balance",
          note: "Schedule short breaks throughout the day to avoid burnout and recharge your energy. Step away from your workspace and engage in activities that promote well-being.",
        },
        {
          step: 6,
          description: "Communicate effectively with colleagues and managers",
          note: "Stay connected with your team using communication tools and regular check-ins to ensure alignment and collaboration.",
        },
        {
          step: 7,
          description: "End your workday at a reasonable time",
          note: "Establish a consistent end time to maintain a healthy work-life balance and avoid burnout.",
        },
        {
          step: 8,
          description: "Reflect on your progress and identify areas for improvement",
          note: "Take time at the end of the day to reflect on your accomplishments and identify areas where you can improve your work-from-home routine.",
        },
      ];

 
      const presentationSteps = [
        {
          step: 1,
          description: "Know your audience",
          note: "Tailor your content and delivery style to suit the background, interests, and expectations of your audience.",
        },
        {
          step: 2,
          description: "Craft a compelling narrative",
          note: "Structure your presentation around a clear storyline that engages your audience and guides them through your key points."
        },
        {
          step: 3,
          description: "Design effective visuals",
          note: "Use visuals strategically to enhance your message, not as a substitute for strong storytelling and delivery." },
        {
          step: 4,
          description: "Practice relentlessly",
          note: "Rehearse your presentation multiple times to gain confidence, refine your delivery, and ensure a smooth flow."
        },
        {
          step: 5,
          description: "Command the presentation space",
          note: "Project confidence and poise through your posture, voice modulation, and eye contact with your audience."
        },
        {
          step: 6, 
          description:"Embrace storytelling techniques",
          note: "Use anecdotes, personal experiences, and relatable examples to connect with your audience and make your presentation more memorable."
        },
        {
          step: 7, 
          description:"Incorporate audience engagement",
          note: "Ask questions, invite participation, and respond to feedback to keep your audience actively involved throughout the presentation."
        },
        {
          step: 8, 
          description:"Conclude with a memorable impact",
          note: "Summarize your key points, leave a lasting impression, and provide a clear call to action for your audience."
      },
    ];




const makeMashedPotatoes = [
{
    step: 1,
    description: "Gather ingredients",
    note: "Collect all the necessary ingredients, including potatoes, butter, milk, salt, and pepper."
},
{
    step: 2,
    description: "Peel and chop potatoes",
    note: "Wash and peel the potatoes, then cut them into even-sized cubes for even cooking."
},
{
    step: 3,
    description: "Boil potatoes",
    note: "Place the chopped potatoes in a large pot, cover them with water, and bring to a boil. Reduce heat and simmer until the potatoes are tender when pierced with a fork."
},
{
    step: 4,
    description: "Drain potatoes",
    note: "Carefully pour the hot water from the pot, ensuring all potatoes are drained."
},
{
    step: 5,
    description: "Mash potatoes",
    note: "Return the drained potatoes to the pot or transfer them to a large bowl. Use a potato masher or an electric mixer to mash the potatoes until smooth and creamy."
},
{
    step: 6,
    description: "Add butter and milk",
    note: "Cut the butter into small pieces and add it to the mashed potatoes along with warm milk. Gradually incorporate the butter and milk while mashing until the desired consistency is reached."
},
{
    step: 7,
    description: "Season with salt and pepper",
    note: "Add salt and pepper to taste, adjusting the amount according to your preference."
},
{
    step: 8,
    description: "Serve and enjoy!",
    note: "Transfer the creamy mashed potatoes to a serving dish and garnish with fresh herbs or other desired toppings. Serve immediately and savor the delicious homemade mashed potatoes."
}];





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
                div.title = item.note; // Add this line to set the title attribute

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

