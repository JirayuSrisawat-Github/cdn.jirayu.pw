import "@/assets/globals.css";

export const metadata = {
  title: "Jirayu.pw | CDN",
  description: "Jirayu.pw",
};

export default function RootLayout(props: RootLayoutProps) {
  return (
    <>
      <html lang={"th"}>
        <body>
          <div id={"root-layout"}>{props.children}</div>
        </body>
      </html>
    </>
  );
}

interface RootLayoutProps {
  children: React.ReactNode;
}
