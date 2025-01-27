"use client";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 items-center justify-around">
        <div className="text-lg font-bold">Luís Lança</div>
        <div className="flex items-center space-x-4">
          {/* Coming soon */}
        </div>
      </div>
    </header>
  );
};

export default Header;