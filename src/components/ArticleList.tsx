
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

interface Article {
  title: string;
  description: string;
  date: string;
  url: string;
}

const articles: Article[] = [
  {
    title: "The Future of Human-Computer Interaction",
    description: "Exploring emerging trends in how we interact with digital interfaces and what it means for user experience design.",
    date: "March 15, 2024",
    url: "#"
  },
  {
    title: "Ethical Considerations in AI Design",
    description: "A deep dive into the ethical implications of AI-driven interfaces and how designers can promote responsible innovation.",
    date: "March 1, 2024",
    url: "#"
  },
  {
    title: "Psychology of User Engagement",
    description: "Understanding the psychological principles behind successful digital product design and user engagement.",
    date: "February 20, 2024",
    url: "#"
  }
];

export const ArticleList = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-midnight mb-8">Recent Articles</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Card 
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-none bg-white"
          >
            <CardContent className="p-6">
              <a 
                href={article.url}
                className="block group"
              >
                <h3 className="text-lg font-semibold text-midnight mb-2 group-hover:text-sapphire transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-sm text-midnight/70 mb-4 line-clamp-2">
                  {article.description}
                </p>
                <div className="flex items-center text-sm text-sapphire">
                  <CalendarDays className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
