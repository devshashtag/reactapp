export const route = [
  { 
    url: "/", 
    title: "صفحه اصلی", 
    type:"item"
  },
  { 
    url: "/pages/courses.html", 
    title: "دوره ها", 
    type:"dropdown",
    data: [ 
      { 
        url: "/pages/learning-steps.html", 
        title: "راهنمای یادگیری", 
        type:"item"
      }
    ]
  },
  { 
    url: "/pages/blog.html", 
    title: "بلاگ", 
    type:"item"
  },
  { 
    url: "/pages/forums.html", 
    title: "تالار گفتمان", 
    type:"item"
  },
  { 
    url: "#tel", 
    title: "کانال تلگرام", 
    type:"item"
  }
]
