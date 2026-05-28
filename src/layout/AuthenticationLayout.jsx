import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const AuthenticationLayout = ({ className, children }) => {
  return (
    <div className="relative min-h-screen bg-[url('/background.png')] bg-cover bg-no-repeat">
      <div className="relative z-10">
        {/* Header */}

        <Header />

        {/* Main */}

        <main className="relative flex flex-1 items-center justify-center px-5 py-10">
          <div
            className={`w-full max-w-150 animate-[fadeSlideIn_0.45s_cubic-bezier(0.22,1,0.36,1)_both] ${className}`}
          >
            <div className="w-full rounded-2xl border border-[#EFEFEF] bg-white px-4 py-5 shadow-[0px_0px_54px_rgba(0,0,0,0.04)] md:px-6">
              {children}
            </div>
          </div>
        </main>

        {/* Footer */}

        <Footer />
      </div>
    </div>
  );
};

export default AuthenticationLayout;
