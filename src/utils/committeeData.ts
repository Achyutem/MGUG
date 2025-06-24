import type {
  CommitteeMember,
  CommitteeTitles,
  Ombudsperson,
  SGRCCommitteeMember,
  SGRCCommitteeTitles,
} from "./types";

export const AntiRaggingcommittee = [
  {
    no: 1,
    name: "Dr. Vimal Kumar Dubey",
    designation: "Chief Proctor, Chair Person",
    phone: "9999764424",
  },
  {
    no: 2,
    name: "Prof. Sunil Kumar",
    designation: "Dean, Faculty of Allied Health Sciences, Co-ordinator",
    phone: "7007638374",
  },
  {
    no: 3,
    name: "Dr. D.S. Ajitha",
    designation: "Principal, Member",
    phone: "8840477265",
  },
  {
    no: 4,
    name: "Dr. Manjunath NS",
    designation: "Principal, GGIMS, Member",
    phone: "9886728745",
  },
  {
    no: 5,
    name: "Shri Rohit Kumar",
    designation: "Principal, Mahant Avaidyanath Paramedical College, Member",
    phone: "7394086797",
  },
  {
    no: 6,
    name: "Shri Ashish Chaudhary",
    designation: "Student, BAMS, Student Representative",
    phone: "8933854299",
  },
];

export const AntiRaggingsquad = [
  {
    no: 1,
    name: "Dr. Shashikant Singh",
    designation: "Principal, Faculty of Pharmaceutical Sciences, Chairperson",
    phone: "7007546991",
  },
  {
    no: 2,
    name: "Dr. Reshmi Pushpan",
    designation: "Professor, Agad Tantra, GGIMS",
    phone: "8289933175",
  },
  {
    no: 3,
    name: "Dr. Deepu Manohar",
    designation: "Assistant Prof., Rachana Sharir, GGIMS",
    phone: "7068152117",
  },
  {
    no: 4,
    name: "Dr. Akhilesh Kumar Dubey",
    designation: "Assistant Prof., Allied Health Sciences, Coordinator",
    phone: "9451520116",
  },
  {
    no: 5,
    name: "Dr. Vikas Kumar Yadav",
    designation: "Assistant Prof., Agriculture Dept., Member",
    phone: "9565919002",
  },
  {
    no: 6,
    name: "Ms. Pragya Pandey",
    designation: "Superintendent, Maa Pateshwari Sevashram Hostel, Member",
    phone: "6202190347",
  },
  {
    no: 7,
    name: "Ms. Rinki Singh",
    designation: "Tutor, GSG College of Nursing, Member",
    phone: "8957120500",
  },
  {
    no: 8,
    name: "Ms. Shweta Albert",
    designation: "Tutor, GSG College of Nursing, Member",
    phone: "8687894954",
  },
  {
    no: 9,
    name: "Mr. Shubham Kumar Maurya",
    designation: "Tutor, MAP College, Member",
    phone: "8477077041",
  },
];

export const ItCommitteeMembers = [
  {
    image: "/admin/prashanthMurthy.jpg",
    name: "Dr. Prashanth S. Murthy",
    designation: "IT Chief, Dean Academics",
  },
  {
    image: "/sample.webp",
    name: "Avinash Kamal Mishra",
    designation: "ERP Developer",
  },
  {
    image: "/sample.webp",
    name: "Kamal Nayan Srivastava",
    designation: "Social Media Manager",
  },
  {
    image: "/sample.webp",
    name: "Anand Mishra",
    designation: "System Admin",
  },
  {
    image: "/sample.webp",
    name: "Sharadanand Pandey",
    designation: "Graphic Designer",
  },
  {
    image: "/sample.webp",
    name: "Sunny Kumar",
    designation: "Network Admin",
  },
  {
    image: "/sample.webp",
    name: "Omkar Yadav",
    designation: "Web Developer",
  },
  {
    image: "/sample.webp",
    name: "Ravi Yadav",
    designation: "Content Creator",
  },
  {
    image: "/sample.webp",
    name: "Ankit Kumar Singh",
    designation: "Junior Developer",
  },
  {
    image: "/sample.webp",
    name: "Achyutem Dubey",
    designation: "Web Developer",
  },
];

export const financeCommitteeTitles: CommitteeTitles = {
  heading: {
    hindi: "वित्त समिति",
    english: "Finance Committee",
  },
  headers: {
    srNo: {
      hindi: "क्रमांक",
      english: "Sr. No",
    },
    nameDesignation: {
      hindi: "नाम और पदनाम",
      english: "Name & Designation",
    },
    role: {
      hindi: "दायित्व",
      english: "Role",
    },
    status: {
      hindi: "नामित/पदेन",
      english: "Nominated/Ex-Officio",
    },
  },
};

export const financeCommitteeData: CommitteeMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "डॉ. सुरिंदर सिंह",
      english: "Dr. Surinder Singh",
    },
    designation: {
      hindi: "कुलपति",
      english: "Vice Chancellor",
    },
    role: {
      hindi: "अध्यक्ष",
      english: "Chairperson",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 2,
    name: {
      hindi: "डॉ. शैलेंद्र प्रताप सिंह",
      english: "Dr. Shailendra Pratap Singh",
    },
    designation: {
      hindi: "सदस्य, महाराणा प्रताप शिक्षा परिषद",
      english: "Member, Maharana Pratap Shiksha Parishad",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "नामित",
      english: "Nominated",
    },
  },
  {
    srNo: 3,
    name: {
      hindi: "श्री प्रमथ नाथ मिश्र",
      english: "Shri Pramath Nath Mishra",
    },
    designation: {
      hindi: "वरिष्ठ अधिवक्ता",
      english: "Senior Advocate",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "नामित",
      english: "Nominated",
    },
  },
  {
    srNo: 4,
    name: {
      hindi: "डॉ. डी.एस. अजीथा",
      english: "Dr. D.S. Ajitha",
    },
    designation: {
      hindi: "डीन, नर्सिंग संकाय",
      english: "Dean, Faculty of Nursing",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 5,
    name: {
      hindi: "डॉ. प्रदीप कुमार राव",
      english: "Dr. Pradeep Kumar Rao",
    },
    designation: {
      hindi: "कुलसचिव",
      english: "Registrar",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 6,
    name: {
      hindi: "श्री अनिल सिंह",
      english: "Shri Anil Singh",
    },
    designation: {
      hindi: "सी.ई.ओ.",
      english: "CEO",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
  {
    srNo: 7,
    name: {
      hindi: "वित्त अधिकारी",
      english: "Finance Officer",
    },
    designation: {
      hindi: "",
      english: "",
    },
    role: {
      hindi: "सचिव",
      english: "Secretary",
    },
    status: {
      hindi: "पदेन",
      english: "Ex-Officio",
    },
  },
];

export const sgrcCommitteeTitles: SGRCCommitteeTitles = {
  heading: {
    hindi: "छात्र शिकायत निवारण समिति",
    english: "Student's Grievance Redressal Committee",
  },
  headers: {
    srNo: {
      hindi: "क्रमांक",
      english: "S. No.",
    },
    name: {
      hindi: "नाम",
      english: "Name",
    },
    designation: {
      hindi: "पदनाम",
      english: "Designation",
    },
    role: {
      hindi: "दायित्व",
      english: "Role",
    },
  },
};

export const sgrcCommitteeData: SGRCCommitteeMember[] = [
  {
    srNo: 1,
    name: {
      hindi: "डॉ. डी एस अजीथा",
      english: "Dr. D S Ajitha",
    },
    designation: {
      hindi: "प्राचार्य, गुरु श्री गोरक्षनाथ कॉलेज ऑफ नर्सिंग",
      english: "Principal, Guru Shree Gorakshnath College of Nursing",
    },
    role: {
      hindi: "अध्यक्ष (महिला)",
      english: "Chairperson (Female)",
    },
  },
  {
    srNo: 2,
    name: {
      hindi: "डॉ. मिनी के. वी.",
      english: "Dr. Mini Kim",
    },
    designation: {
      hindi: "आचार्य, शारीरिक शिक्षा विभाग, आयुर्वेदिक कॉलेज",
      english: "Professor, English",
    },
    role: {
      hindi: "सदस्य (अन्य पिछड़ा वर्ग-महिला)",
      english: "Member (OBC-Female)",
    },
  },
  {
    srNo: 3,
    name: {
      hindi: "प्रो. डी. जेनी",
      english: "Prof. D. Jenny",
    },
    designation: {
      hindi: "आचार्य, गुरु श्री गोरक्षनाथ कॉलेज ऑफ नर्सिंग",
      english: "Professor, Guru Shree Gorakshnath College of Nursing",
    },
    role: {
      hindi: "सदस्य (अन्य पिछड़ा वर्ग-महिला)",
      english: "Member (OBC-Female)",
    },
  },
  {
    srNo: 4,
    name: {
      hindi: "प्रो. डॉ. गोपी कृष्ण एस.",
      english: "Prof. Dr. Gopi Krishna S.",
    },
    designation: {
      hindi: "आचार्य, आयुर्वेदिक कॉलेज",
      english: "Professor, Ayurvedic College",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 5,
    name: {
      hindi: "डॉ. विमल कुमार दुबे",
      english: "Dr. Vimal Kumar Dubey",
    },
    designation: {
      hindi: "डीन, कृषि विज्ञान",
      english: "Dean, Agricultural Sciences",
    },
    role: {
      hindi: "सदस्य",
      english: "Member",
    },
  },
  {
    srNo: 6,
    name: {
      hindi: "श्री शिवम पांडे",
      english: "Shri Shivam Pandey",
    },
    designation: {
      hindi: "छात्र, बी.एससी (जैव प्रौद्योगिकी)",
      english: "Student, B.Sc (Biotechnology)",
    },
    role: {
      hindi: "छात्र सदस्य",
      english: "Student Member",
    },
  },
];

export const ombudspersonData: Ombudsperson = {
  name: {
    hindi: "प्रो. वी. के. सिंह",
    english: "Prof. V. K. Singh",
  },
  designation: {
    hindi: "पूर्व कुलपति, दीनदयाल उपाध्याय गोरखपुर विश्वविद्यालय",
    english: "Former Vice-Chancellor, DDU Gorakhpur University",
  },
  contact: {
    phone: "+91-7905468594",
    email: "singhvijaikrishna9@gmail.com",
  },
};
