import Logo from "@/components/Logo";

// Placeholder: the home page is built in build step 4 (hero) onward.
// Until then this renders only the logo bar; the design system is at /styleguide.
export default function Home() {
  return (
    <main>
      <div className="page" style={{ display: "flex", alignItems: "center", minHeight: 83 }}>
        <Logo />
      </div>
    </main>
  );
}
