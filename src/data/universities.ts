export type TrackKey = "transfer" | "graduate";

export type University = {
  name: string;
  slug: string;
  categories: ("physics" | "electronic-physics")[];
  tracks: {
    transfer: { title: string; requirementsUrl: string; pastExamsUrl?: string };
    graduate: { title: string; requirementsUrl: string; pastExamsUrl?: string };
  };
};

export const universities: University[] = [
  {
    name: "東京大学",
    slug: "tokyo",
    categories: ["physics", "electronic-physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "", 
        pastExamsUrl: "" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.s.u-tokyo.ac.jp/ja/admission/master/files/R8/R8_master_guidelines.pdf", 
        pastExamsUrl: "https://www.phys.s.u-tokyo.ac.jp/about/147/" }
    }
  },
  {
    name: "筑波大学",
    slug: "tsukuba",
    categories: ["physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "https://ac.tsukuba.ac.jp/wp/wp-content/uploads/2025/04/R8_hennyu.pdf", 
        pastExamsUrl: "https://ac.tsukuba.ac.jp/examination/exam_questions/?utm_source=chatgpt.com" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.ap-graduate.tsukuba.ac.jp/course/pas/", 
        pastExamsUrl: "https://grad.physics.tsukuba.ac.jp/%e5%a4%a7%e5%ad%a6%e9%99%a2%e5%85%a5%e5%ad%a6%e6%a1%88%e5%86%85/" 
      }
    }
  },
  {
    name: "千葉大学",
    slug: "chiba",
    categories: ["physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "", 
        pastExamsUrl: "" },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.se.chiba-u.jp/admission/first/files/2026/info_s_2026_doctoralApplication_01.pdf", 
        pastExamsUrl: "https://physics.s.chiba-u.ac.jp/exam/past/index.html" 
      }
    }
  },
  {
    name: "横浜国立大学",
    slug: "ynu",
    categories: ["physics", "electronic-physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "", 
        pastExamsUrl: "" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.fse.ynu.ac.jp/exam/exam/master/202604-02/docs/application_guideline.pdf?251010", 
        pastExamsUrl: "" 
      }
    }
  },
  {
    name: "東京都立大学",
    slug: "tmu",
    categories: ["physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "", 
        pastExamsUrl: "" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.se.tmu.ac.jp/youkou/2026M/11.pdf", 
        pastExamsUrl: "https://www.se.tmu.ac.jp/entrance_exam.html" 
      }
    }
  },
  {
    name: "埼玉大学",
    slug: "saitama",
    categories: ["physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "", 
        pastExamsUrl: "" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.saitama-u.ac.jp/rikogaku/wp-content/uploads/%E5%8D%9A%E5%A3%AB%E5%89%8D%E6%9C%9F%E8%AA%B2%E7%A8%8B%E3%80%80%E4%BB%A4%E5%92%8C8%E5%B9%B44%E6%9C%88%E5%85%A5%E5%AD%A6%EF%BC%88%E7%AC%AC3%E6%AC%A1%E5%8B%9F%E9%9B%86%EF%BC%89.pdf", 
        pastExamsUrl: "https://phy.saitama-u.ac.jp/admission/#daigakuin" 
      }
    }
  }
];
