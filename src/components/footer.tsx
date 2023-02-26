const Footer = () => {
  return (
    <footer className="p-6 flex bg-[#1c2122] w-full h-[180px] border-t-[1px] border-zinc-500 flex-row flex-wrap justify-center">
      <div className="mx-6 flex w-64 flex-initial flex-col content-between justify-around sm:mx-14">
        <span className="mt-9 text-lg font-bold not-italic text-slate-300 sm:mt-1">
          our offices
        </span>
        <hr className="h-1 w-4 bg-slate-300 text-slate-300"></hr>
        <div className="flex flex-row flex-wrap justify-between pt-2">
          <p className="text-sm font-light not-italic text-white/[.5]">
            8 Centralna st.,
            <br /> Chernivtsi
            <br /> Ukraine 58000
          </p>
          <div className="text-sm font-light not-italic text-white/[.5]">
            1 Boikivska st.,
            <br /> Lviv
            <br /> Ukraine 79044
          </div>
        </div>
      </div>
      <div className="mx-6 flex w-48 flex-initial flex-col justify-around">
        <span className="mt-9 text-lg font-bold not-italic text-slate-300 sm:mt-1">
          contacts
        </span>
        <hr className="h-1 w-4 bg-slate-300 text-slate-300"></hr>
        <p className="pt-7 text-sm font-light not-italic text-white/[.5]">
          info@improveit.solutions
          <br /> +380676736718
        </p>
      </div>

      <div className="mx-6 flex w-48 flex-initial flex-col justify-around">
        <span className="mt-9 text-lg font-bold not-italic text-slate-300 sm:mt-1">
          main website
        </span>
        <hr className="h-1 w-4 bg-slate-300 text-slate-300"></hr>
        <p className="pt-7 text-sm font-light not-italic text-white/[.5]">
          ImproveIT Customer Care
          <br /> Services powered by
        </p>
        <span>
          <a className="text-sm font-light not-italic text-slate-300 underline underline-offset-2">
            ImproveIT Solutions
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
