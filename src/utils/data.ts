type MegaMenuHeader = {
  type: "header";
  label: string;
  href?: never;
  subSections?: MegaMenuSection[];
};

type MegaMenuLink = {
  type: "link";
  label: string;
  href: string;
  subSections?: MegaMenuSection[];
};

export type MegaMenuSection = MegaMenuHeader | MegaMenuLink;

export type MegaMenus = {
  Students: MegaMenuSection[];
  Administration: MegaMenuSection[];
  More: MegaMenuSection[];
};

// Your menu data
export const menuItems: (keyof MegaMenus | "Home" | "Research" | "Contact")[] =
  ["Home", "Students", "Administration", "Research", "More", "Contact"];

export const megaMenus: MegaMenus = {
  Students: [
    {
      type: "header",
      label: "Academics",
      subSections: [
        {
          type: "link",
          label: "Syllabus and Timetable",
          href: "https://mgug.ac.in/#",
        },
        {
          type: "link",
          label: "Academic Calendar",
          href: "https://mgug.ac.in/academics/academic_calendar.php",
        },
        { type: "link", label: "E-Learning", href: "https://mgug.ac.in/#" },
        {
          type: "header",
          label: "Examination",
          subSections: [
            {
              type: "link",
              label: "Examination Manual",
              href: "https://mgug.ac.in/examination/examination_manual.php",
            },
            {
              type: "link",
              label: "Result",
              href: "https://mgug.ac.in/examination/result.php",
            },
            {
              type: "link",
              label: "Schedules",
              href: "https://mgug.ac.in/examination/schedule.php",
            },
          ],
        },
        {
          type: "header",
          label: "Faculties",
          subSections: [
            {
              type: "link",
              label: "Faculty of Allied Health Science",
              href: "https://allied.mgug.ac.in/",
            },
            {
              type: "link",
              label: "Faculty of Agriculture",
              href: "https://agriculture.mgug.ac.in/",
            },
            {
              type: "link",
              label: "Faculty of Pharmaceutical Sciences",
              href: "https://pharmacy.mgug.ac.in/",
            },
            {
              type: "link",
              label: "Faculty of Commerce",
              href: "https://commerce.mgug.ac.in/",
            },
          ],
        },
      ],
    },
    {
      type: "header",
      label: "Admissions",
      subSections: [
        {
          type: "link",
          label: "List of Programs",
          href: "https://mgug.ac.in/academics/programmes_list.php",
        },
        {
          type: "link",
          label: "Certification and Diploma Certification",
          href: "https://mgug.ac.in/academics/diploma.php",
        },
        {
          type: "link",
          label: "Under Graduate Programs",
          href: "https://mgug.ac.in/academics/ug.php",
        },
        {
          type: "link",
          label: "Post Graduate Programs",
          href: "https://mgug.ac.in/academics/pg.php",
        },
        {
          type: "link",
          label: "Ph.D. Programs",
          href: "https://mgug.ac.in/academics/phd.php",
        },
        {
          type: "link",
          label: "Fee Structure",
          href: "https://mgug.ac.in/academics/fee_structure.php",
        },
        {
          type: "link",
          label: "Admission Notice",
          href: "https://admission.mgug.ac.in/",
        },
        {
          type: "header",
          label: "Colleges",
          subSections: [
            {
              type: "link",
              label:
                "Shri Gorakshnath Medical College Hospital and Research Centre",
              href: "https://sgmchrc.in/",
            },
            {
              type: "link",
              label: "Guru Gorakshnath Institute of Medical Sciences(Ayurveda)",
              href: "https://ayurveda.mgug.ac.in/",
            },
            {
              type: "link",
              label: "Guru Shri Gorakshnath College of Nursing",
              href: "https://nursing.mgug.ac.in/",
            },
            {
              type: "link",
              label: "Mahant Avaidhyanath Paramedical College",
              href: "https://paramedical.mgug.ac.in/",
            },
          ],
        },
      ],
    },
    {
      type: "header",
      label: "Campus Life",
      subSections: [
        {
          type: "link",
          label: "Library",
          href: "https://mgug.ac.in/campus_facilities/library.php",
        },
        {
          type: "link",
          label: "Hostel",
          href: "https://mgug.ac.in/campus_facilities/hostel.php",
        },
        {
          type: "link",
          label: "Sports",
          href: "https://mgug.ac.in/campus_facilities/sport.php",
        },
        {
          type: "link",
          label: "Events",
          href: "https://mgug.ac.in/announcement/event.php",
        },
        {
          type: "link",
          label: "Anti Ragging",
          href: "https://mgug.ac.in/academics/anti_rag.php",
        },
        {
          type: "link",
          label: "NSS",
          href: "https://mgug.ac.in/nss/index.php",
        },
      ],
    },
  ],
  Administration: [
    {
      type: "header",
      label: "Leadership",
      subSections: [
        {
          type: "link",
          label: "Chancellor",
          href: "/administration/chancellor",
        },
        {
          type: "link",
          label: "Pro-Chancellor",
          href: "/administration/pro-chancellor",
        },
        {
          type: "link",
          label: "Vice-Chancellor",
          href: "/administration/Vice-Chancellor",
        },
        {
          type: "link",
          label: "Registrar",
          href: "/administration/registrar",
        },
        {
          type: "link",
          label: "Finance Officer",
          href: "/administration/Finance-officer",
        },
        {
          type: "link",
          label: "Controller of Examination",
          href: "/administration/Controller-of-examination",
        },
        {
          type: "link",
          label: "Chief Proctor",
          href: "/administration/chief-proctor",
        },
        {
          type: "link",
          label: "Chief Vigilance Officer",
          href: "/administration/Chief-vigilance-officer",
        },
        {
          type: "link",
          label: "Ombuds Person",
          href: "/administration/Ombuds-Person",
        },
      ],
    },
    {
      type: "header",
      label: "Statutory Bodies",
      subSections: [
        {
          type: "link",
          label: "Governing Body",
          href: "/Statutory-Body/governing-Body",
        },
        {
          type: "link",
          label: "Empowered Body",
          href: "/Statutory-Body/Empowered-Body",
        },
        {
          type: "link",
          label: "Executive Council",
          href: "/Statutory-Body/executive-council",
        },
        {
          type: "link",
          label: "Academic Council",
          href: "/Statutory-Body/academic-council",
        },
        {
          type: "link",
          label: "Board of Studies",
          href: "/Statutory-Body/Board-of-Studies",
        },
      ],
    },
    {
      type: "header",
      label: "Committees",
      subSections: [
        {
          type: "link",
          label: "Managing Committee",
          href: "https://mgug.ac.in/",
        },
        {
          type: "link",
          label: "Finance Committee",
          href: "/Committee/Finance-Committee",
        },
        {
          type: "link",
          label: "Examination Committee",
          href: "/Committee/Examination-Committee",
        },
        {
          type: "link",
          label: "Students Grievance Redressal Committee",
          href: "/Committee/srgc",
        },
        {
          type: "link",
          label: "Anti-Ragging Committee",
          href: "/Committee/Anti-Ragging",
        },
        {
          type: "link",
          label: "IT Committee",
          href: "/Committee/it-committee",
        },
      ],
    },
  ],
  More: [
    {
      type: "header",
      label: "About Us",
      subSections: [
        { type: "link", label: "About Us", href: "/about" },
        {
          type: "link",
          label: "Vision & Mission",
          href: "https://mgug.ac.in/the_university/vision.php",
        },
        {
          type: "link",
          label: "Location & Campus",
          href: "https://mgug.ac.in/the_university/contact_us.php",
        },
        { type: "link", label: "University Logo", href: "/university-logo" },
        {
          type: "link",
          label: "Statute Of University",
          href: "https://mgug.ac.in/PDF/First_Statute_MGUG_Final_02-08-2021.pdf",
        },
        {
          type: "link",
          label: "Student's Union Constitution",
          href: "https://mgug.ac.in/PDF/StudentUnionConstitution.pdf",
        },
      ],
    },
    {
      type: "header",
      label: "Community",
      subSections: [
        { type: "link", label: "Social Work", href: "https://mgug.ac.in/#" },
        { type: "link", label: "Health Camps", href: "https://mgug.ac.in/#" },
        { type: "link", label: "Child Welfare", href: "https://mgug.ac.in/#" },
      ],
    },
    {
      type: "header",
      label: "Resources",
      subSections: [
        {
          type: "link",
          label: "Photo Gallery",
          href: "https://mgug.ac.in/gallery/photo_gallery.php",
        },
        {
          type: "link",
          label: "Video Gallery",
          href: "https://mgug.ac.in/gallery/video_gallery.php",
        },
        {
          type: "link",
          label: "Media Coverage",
          href: "https://mgug.ac.in/gallery/media_coverage.php",
        },
        {
          type: "link",
          label: "News",
          href: "https://mgug.ac.in/announcement/news.php",
        },
        {
          type: "link",
          label: "Downloads",
          href: "https://mgug.ac.in/announcement/download.php",
        },
        {
          type: "link",
          label: "Swayam Portal",
          href: "https://swayam.gov.in/",
        },
        { type: "link", label: "ERP", href: "https://erp.mgug.ac.in/" },
        {
          type: "link",
          label: "E-Samadhaan",
          href: "https://samadhaan.ugc.ac.in/",
        },
        { type: "link", label: "Jobs", href: "https://mgug.ac.in/job.php" },
      ],
    },
  ],
};

// foooter options
export const impLinks = [
  { label: "National Medical Commission", href: "https://www.nmc.org.in/" },
  { label: "University Grant Commission", href: "https://ugc.ac.in/" },
  { label: "Dental Council of India", href: "https://dciindia.gov.in/" },
  { label: "Right to Information Act", href: "https://rtionline.gov.in/" },
  {
    label: "National Education Policy",
    href: "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
  },
  {
    label: "Ragging Complaint Form",
    href: "https://mgug.ac.in/academics/anti_rag.php",
  },
  {
    label: "Grievance Redressal",
    href: "https://erp.mgug.ac.in/committees/",
  },
];

export const privacy = [
  { label: "Annual Report", href: "https://mgug.ac.in/index.php#" },
  {
    label: "Terms & Conditions",
    href: "https://mgug.ac.in/the_university/terms.php",
  },
  { label: "Policy", href: "https://mgug.ac.in/the_university/policy.php" },
];
