import MailTo from "./MailTo";

function Header() {
  return (
    <>
      <img
        className="upper-image"
        src="https://raw.githubusercontent.com/AlexandrosLiaskos/Awesome_Wallpapers/main/images/japan3.jpg"
        alt="wallpaper"
        style={{ width: "20%", height: "auto", borderRadius: "8px" }}
      />
      <section className="section-info">
        <h2 className="section_name">Valay Bhaladhare</h2>
        <p className="section_para_info">
          Cybersecurity Enthusiast | Software Engineer | Web Developer | JAVA{" "}
        </p>
        <p
          className="link-for-github"
          onClick={() => window.open("https://github.com/valay-2004")}
          style={{ cursor: "pointer" }}
        >
          Know more
        </p>
        <div className="contact-header">
          <MailTo
            email="valaybhaladhare56@gmail.com"
            subject="Let's talk"
            body="Hey, Valay!"
            className="mailto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span>Email</span>
          </MailTo>
        </div>
      </section>
    </>
  );
}

export default Header;
