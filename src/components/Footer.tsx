const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="pt-12">
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <p className="text-slate-300 text-base">
                © 2025 All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-slate-300 text-base">
                Built with React & TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;