// Mock Data For Student Module
function makeStudents(){
  return [{
     'name':'陆健',
     'sex':'M',
     'github':'molake',
     'desc':'',
     'exam1': 95, // 10 10 5 5 20 5 molake/lujian-exam.git
     'exam2': 0, // 5 10 20 15 15 10
     'exam3': 0, // 10 5 10 10 15
     'exam4': 0 // 10 30 20 20 10
    },
    {
     'name':'魏鸣',
     'sex':'F',
     'github':'boakeai',
     'desc':'',
     'exam1': 80, // 10 10 5 5 20 5 boakeai/weim-day1
     'exam2': 0, // 5 10 20 15 15 10
     'exam3': 0, // 10 5 10 10 15
     'exam4': 0 // 10 30 20 20 10
    },
    {
     'name':'谢理',
     'sex':'M',
     'github':'ymyyyok',
     'desc':'',
     'exam1': 80, // 10 10 5 5 20 5 ymyyyok/xieli-day1
     'exam2': 0, // 5 10 20 15 15 10
     'exam3': 0, // 10 5 10 10 15
     'exam4': 0 // 10 30 20 20 10
    },
    {
     'name':'查勇',
     'sex':'M',
     'github':'zhayong',
     'desc':'',
     'exam1': 0, // 10 10 5 5 20 5 zhayong/zhayong-exam.git
     'exam2': 0, // 5 10 20 15 15 10
     'exam3': 0, // 10 5 10 10 15
     'exam4': 0 // 10 30 20 20 10
    }
  ];
}

export let StudentData = {
    students:makeStudents()
};
