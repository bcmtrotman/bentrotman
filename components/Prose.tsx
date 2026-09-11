import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

/** Renders Markdown or MDX body text with the site's body typography. */
export default function Prose({ source }: { source: string }) {
  return (
    <div className="prose">
      <MDXRemote source={source} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </div>
  );
}
