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
        type:"item",
        topbar: false
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
  },
  { 
    url: "#!", 
    title: "صفحات بی ادرس", 
    type:"dropdown",
    data: [ 
      { 
        url: "/pages/my-account/recover-password.html", 
        title: "بازیابی رمز عبور", 
        type:"item"
      },
      { 
        url: "/pages/courses/javascript.html", 
        title: "آموزش جاوااسکریپت", 
        type:"item"
      }
    ]
  },
]
