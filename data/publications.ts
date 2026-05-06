export type Publication = {
  year: string;
  venue: string;
  status: "Published" | "Under Review" | "Forthcoming";
  title: string;
  authors: { name: string; isMe?: boolean }[];
  doi?: string;
  pdf?: string;
  description: string;
};

export const publications: Publication[] = [
  {
    year: "2025",
    venue: "ACM CHI 2025 Student Design Competition",
    status: "Published",
    title:
      "Le Petit Care: A Child-Attuned Design for Personalized ADHD Symptom Management Through AI-powered Extended Reality",
    authors: [
      { name: "Jaehyun Byun" },
      { name: "Chowon Joung" },
      { name: "Yerim Lee", isMe: true },
      { name: "Suyun Lee"},
      { name: "Wooky Won"}
    ],
    doi: "https://dl.acm.org/doi/10.1145/3706599.3720300",
    pdf: "/docs/le-petit-care-chi25.pdf",
    description: "Presents an AI-powered XR intervention concept grounded in child-centered therapeutic design."
  },
];
