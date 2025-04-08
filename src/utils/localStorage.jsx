const Students = [
  {
    id: "s1",
    firstName: "Rahul",
    lastName: "Verma",
    email: "student1@example.com",
    password: "123",
    tasks: [
      {
        title: "Math Assignment",
        description: "Complete algebra questions from chapter 3.",
        date: "2025-04-10",
        category: "Assignment",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Science Quiz",
        description: "Revise chapters 5 and 6 for quiz.",
        date: "2025-04-12",
        category: "Exam",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Project Submission",
        description: "Submit chemistry project on acids and bases.",
        date: "2025-04-15",
        category: "Project",
        active: false,
        new: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: "s2",
    firstName: "Sneha",
    lastName: "Patel",
    email: "student2@example.com",
    password: "123",
    tasks: [
      {
        title: "History Essay",
        description: "Write an essay on World War II causes.",
        date: "2025-04-11",
        category: "Assignment",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Coding Challenge",
        description: "Finish React login component.",
        date: "2025-04-09",
        category: "Project",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Mock Interview",
        description: "Prepare for mock interview session.",
        date: "2025-04-14",
        category: "Training",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Presentation",
        description: "Prepare slides for science fair.",
        date: "2025-04-13",
        category: "Project",
        active: false,
        new: false,
        completed: false,
        failed: true
      }
    ],
    taskCounts: {
      active: 2,
      new: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: "s3",
    firstName: "Aman",
    lastName: "Reddy",
    email: "student3@example.com",
    password: "123",
    tasks: [
      {
        title: "Economics Report",
        description: "Analyze GDP trends in India.",
        date: "2025-04-12",
        category: "Assignment",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "English Poem Analysis",
        description: "Analyze the theme of the poem.",
        date: "2025-04-09",
        category: "Assignment",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Career Counseling",
        description: "Attend career counseling webinar.",
        date: "2025-04-13",
        category: "Event",
        active: true,
        new: true,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 0
    }
  },
  {
    id: "s4",
    firstName: "Priya",
    lastName: "Singh",
    email: "student4@example.com",
    password: "123",
    tasks: [
      {
        title: "Science Revision",
        description: "Review physics chapter on light.",
        date: "2025-04-10",
        category: "Exam",
        active: true,
        new: false,
        completed: false,
        failed: false
      },
      {
        title: "Group Discussion",
        description: "Participate in online group discussion on tech ethics.",
        date: "2025-04-15",
        category: "Event",
        active: false,
        new: true,
        completed: false,
        failed: true
      },
      {
        title: "Portfolio Submission",
        description: "Upload your design portfolio.",
        date: "2025-04-14",
        category: "Project",
        active: false,
        new: false,
        completed: true,
        failed: false
      }
    ],
    taskCounts: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: "s5",
    firstName: "Vikram",
    lastName: "Mehta",
    email: "student5@example.com",
    password: "123",
    tasks: [
      {
        title: "Reading Assignment",
        description: "Read and summarize Chapter 8.",
        date: "2025-04-11",
        category: "Assignment",
        active: true,
        new: true,
        completed: false,
        failed: false
      },
      {
        title: "Art Competition",
        description: "Prepare entry for college art competition.",
        date: "2025-04-13",
        category: "Event",
        active: false,
        new: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review teammate’s code for final project.",
        date: "2025-04-12",
        category: "Project",
        active: true,
        new: true,
        completed: false,
        failed: false
      }
    ],
    taskCounts: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 0
    }
  }
];

  const Faculty = [
    {
      id: "f1",
      firstName: "Neha",
      lastName: "Sharma",
      email: "faculty@example.com",
      password: "123"
    }
  ];
  


export const setLocalStorage=()=>{
    localStorage.setItem('Students',JSON.stringify(Students))
    localStorage.setItem('Faculty',JSON.stringify(Faculty))
}

export const getLocalStorage=()=>{
    const Students=JSON.parse(localStorage.getItem('Students'))
    const Faculty=JSON.parse(localStorage.getItem('Faculty'))

    return {Students,Faculty}
}
  