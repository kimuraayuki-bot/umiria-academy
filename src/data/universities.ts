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
        requirementsUrl: "https://www.u-tokyo.ac.jp/ja/admissions/undergraduate/e06.html", 
        pastExamsUrl: "" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.s.u-tokyo.ac.jp/ja/admission/master/index.html", 
        pastExamsUrl: "https://www.phys.s.u-tokyo.ac.jp/about/147/" }
    }
  },
  {
    name: "筑波大学",
    slug: "tsukuba",
    categories: ["physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "https://ac.tsukuba.ac.jp/apply/application-guidelines/", 
        pastExamsUrl: "https://ac.tsukuba.ac.jp/examination/exam_questions/r8_exam/" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.ap-graduate.tsukuba.ac.jp/course/pas/", 
        pastExamsUrl: "" 
      }
    }
  },
  {
    name: "千葉大学",
    slug: "chiba",
    categories: ["physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "https://www.s.chiba-u.ac.jp/admission/application.html", 
        pastExamsUrl: "https://www.s.chiba-u.ac.jp/admission/application.html" },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.se.chiba-u.jp/admission/", 
        pastExamsUrl: "https://www.se.chiba-u.jp/admission/past/1st_dr/physics.html" 
      }
    }
  },
  {
    name: "横浜国立大学",
    slug: "ynu",
    categories: ["physics", "electronic-physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "https://www.ynu.ac.jp/exam/faculty/admission.html", 
        pastExamsUrl: "https://www.ynu.ac.jp/exam/faculty/practical.html" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.fse.ynu.ac.jp/exam/exam/master.html", 
        pastExamsUrl: "https://www.fse.ynu.ac.jp/exam/exam/past/index.html" 
      }
    }
  },
  {
    name: "東京都立大学",
    slug: "tmu",
    categories: ["physics"],
    tracks: {
      transfer: { title: "大学編入", 
        requirementsUrl: "https://www.tmu.ac.jp/entrance/faculty/application_guideline.html", 
        pastExamsUrl: "https://www.tmu.ac.jp/news/entrance/30360.html" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.se.tmu.ac.jp/entrance_exam.html", 
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
        requirementsUrl: "https://www.saitama-u.ac.jp/entrance/index.html", 
        pastExamsUrl: "" 
      },
      graduate: { title: "大学院", 
        requirementsUrl: "https://www.saitama-u.ac.jp/rikogaku/admission/exam/masters.html", 
        pastExamsUrl: "https://phy.saitama-u.ac.jp/admission/" 
      }
    }
  }
];
