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
        requirementsUrl: "", 
        pastExamsUrl: "" }
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
        requirementsUrl: "", 
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
        requirementsUrl: "", 
        pastExamsUrl: "" },
      graduate: { title: "大学院", 
        requirementsUrl: "", 
        pastExamsUrl: "" 
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
        requirementsUrl: "", 
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
        requirementsUrl: "", 
        pastExamsUrl: "" 
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
        requirementsUrl: "", 
        pastExamsUrl: "" 
      }
    }
  }
];
