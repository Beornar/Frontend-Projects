const users = [
  {
    id: 1,
    firstName: "john ",
    lastName: "DoE  ",
    email: "johndoe@example.com",
    age: 28,
    registered: "2020-03-15",
    city: "New York",
    score: 82.5,
    birthDay: {
      day: 11,
      year: 1990,
      month: "Nisan",
    },
    skills: ["JavaScript", "React", "Node.js"],
    education: {
      degree: "Lisans",
      field: "Bilgisayar Bilimi",
      university: "NYU",
      graduationYear: 2012,
    },
    experience: [
      {
        company: "Teknoloji A.Ş.",
        role: "Frontend Developer",
        years: 3,
      },
      {
        company: "Web Çözümleri",
        role: "Junior Developer",
        years: 2,
      },
    ],
    hobbies: ["Okuma", "Seyahat", "Yüzme"],
  },
  {
    id: 2,
    firstName: "jaNE ",
    lastName: "sMiTH",
    email: "janesmith@example.com",
    age: 22,
    registered: "2021-06-20",
    city: "Los Angeles",
    score: 90.0,
    birthDay: {
      day: 25,
      year: 1998,
      month: "Temmuz",
    },
    skills: ["Python", "Django", "Makine Öğrenimi"],
    education: {
      degree: "Yüksek Lisans",
      field: "Yapay Zeka",
      university: "UCLA",
      graduationYear: 2020,
    },
    experience: [
      {
        company: "AI Yenilikçiler",
        role: "Data Scientist",
        years: 2,
      },
    ],
    hobbies: ["Bisiklet", "Resim"],
  },
  {
    id: 3,
    firstName: " aLice ",
    lastName: "johNson ",
    email: "alicejohnson@example.com",
    age: 35,
    registered: "2018-07-10",
    city: "Chicago",
    score: 77.0,
    birthDay: {
      day: 5,
      year: 1985,
      month: "Mart",
    },
    skills: ["Java", "Spring", "Hibernate"],
    education: {
      degree: "Lisans",
      field: "Yazılım Mühendisliği",
      university: "University of Chicago",
      graduationYear: 2007,
    },
    experience: [
      {
        company: "Kurumsal Çözümler",
        role: "Backend Developer",
        years: 7,
      },
      {
        company: "Yenilikçi Uygulamalar",
        role: "Senior Developer",
        years: 5,
      },
    ],
    hobbies: ["Bahçecilik", "Yemek Yapma"],
  },
  {
    id: 4,
    firstName: "bOb ",
    lastName: "broWn ",
    email: "bobbrown@example.com",
    age: 30,
    registered: "2019-11-05",
    city: "Houston",
    score: 85.0,
    birthDay: {
      day: 17,
      year: 1992,
      month: "Aralık",
    },
    skills: ["C#", ".NET", "Azure"],
    education: {
      degree: "Lisans",
      field: "Bilgi Teknolojisi",
      university: "Texas A&M",
      graduationYear: 2014,
    },
    experience: [
      {
        company: "Bulut Hizmetleri",
        role: "Bulut Mühendisi",
        years: 4,
      },
      {
        company: "BT Çözümleri",
        role: "Sistem Yöneticisi",
        years: 3,
      },
    ],
    hobbies: ["Yürüyüş", "Fotoğrafçılık"],
  },
  {
    id: 5,
    firstName: " mAry annE ",
    lastName: "jAckSon ",
    email: "maryjackson@example.com",
    age: 27,
    registered: "2021-05-15",
    city: "San Francisco",
    score: 88.0,
    birthDay: {
      day: 8,
      year: 1994,
      month: "Mayıs",
    },
    skills: ["HTML", "CSS", "JavaScript"],
    education: {
      degree: "Lisans",
      field: "Web Tasarımı",
      university: "Stanford",
      graduationYear: 2016,
    },
    experience: [
      {
        company: "Web Studio",
        role: "Frontend Developer",
        years: 3,
      },
      {
        company: "Creative Solutions",
        role: "UI Designer",
        years: 2,
      },
    ],
    hobbies: ["Yazma", "Çizim"],
  },
  {
    id: 6,
    firstName: "pETer pArKer ",
    lastName: "smith",
    email: "peterparker@example.com",
    age: 29,
    registered: "2022-02-25",
    city: "New York",
    score: 92.0,
    birthDay: {
      day: 15,
      year: 1993,
      month: "Ocak",
    },
    skills: ["JavaScript", "Vue.js", "Node.js"],
    education: {
      degree: "Lisans",
      field: "Bilgisayar Mühendisliği",
      university: "Columbia University",
      graduationYear: 2015,
    },
    experience: [
      {
        company: "Tech Innovators",
        role: "Full Stack Developer",
        years: 4,
      },
      {
        company: "NextGen Solutions",
        role: "Backend Developer",
        years: 3,
      },
    ],
    hobbies: ["Tırmanma", "Kayak"],
  },
];

const splitFirstName = (firstName) => {
  return firstName.trim().toLowerCase().split(" ").map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" ");
}
const userList = [];

users.forEach(user => {
  const newFirstName = splitFirstName(user.firstName);
  const newLastName = user.lastName.trim().toUpperCase();
  userList.push(newFirstName + " " + newLastName);
})
console.table(userList);

const months = {
  "Ocak": 1,
  "Şubat": 2,
  "Mart": 3,
  "Nisan": 4,
  "Mayıs": 5,
  "Haziran": 6,
  "Temmuz": 7,
  "Ağustos": 8,
  "Eylül": 9,
  "Ekim": 10,
  "Kasım": 11,
  "Aralık": 12
};

const birthdayList = [];

users.forEach(user => {
  const month = String(months[user.birthDay.month]).padStart(2, 0);
  birthdayList.push(user.birthDay.day + "-" + month + "-" + user.birthDay.year);
})
console.table(birthdayList);


for (let i = 0; i < userList.length; i++) {
  console.log(`${userList[i]} adlı kişi ${birthdayList[i]} tarihinde doğdu.`);
}