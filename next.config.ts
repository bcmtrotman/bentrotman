import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx"],
  async redirects() {
    // /130/7 and /130/07 go to /130/007. Users never type numbers, but links get mangled.
    const padded = Array.from({ length: 99 }, (_, i) => i + 1).flatMap((n) => {
      const dest = `/:section/${String(n).padStart(3, "0")}`;
      const rules = [{ source: `/:section(\\d{3})/${n}`, destination: dest, permanent: true }];
      if (n < 10) rules.push({ source: `/:section(\\d{3})/0${n}`, destination: dest, permanent: true });
      return rules;
    });
    return [
      ...padded,
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bentrotman.com" }],
        destination: "https://bentrotman.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
