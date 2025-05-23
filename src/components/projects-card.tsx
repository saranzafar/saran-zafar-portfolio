import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
  image?: string;
  dates?: string; // Made optional as it's not in API
}

export function ProjectsCard({
  title,
  description,
  technologies,
  links,
  image,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        <h2 className="font-semibold leading-none">{title}</h2>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant={"secondary"}>
                {tech}
              </Badge>
            ))}
          </div>
        )}
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              aria-label={`Visit ${link.title}`}
              title={`Visit ${link.title}`}
            >
              <Badge className="flex gap-2" title={link.title}>
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}