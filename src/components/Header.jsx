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
        <span className="section_para_info">Computer Science Engineer </span>
        <p
          className="link-for-github"
          /* Change the above className and below link with your portfolio
          when you made it*/
          // Also change the className in index.css file also for styling
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
              width="16"
              height="16"
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

          <a
            href="https://linkedin.com/in/valay2004"
            target="_"
            rel="noopener noreferrer"
          >
            <svg
              className="icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5714 2H3.42411C2.63839 2 2 2.64732 2 3.44196V20.558C2 21.3527 2.63839 22 3.42411 22H20.5714C21.3571 22 22 21.3527 22 20.558V3.44196C22 2.64732 21.3571 2 20.5714 2ZM8.04464 19.1429H5.08036V9.59821H8.04911V19.1429H8.04464ZM6.5625 8.29464C5.61161 8.29464 4.84375 7.52232 4.84375 6.57589C4.84375 5.62946 5.61161 4.85714 6.5625 4.85714C7.50893 4.85714 8.28125 5.62946 8.28125 6.57589C8.28125 7.52679 7.51339 8.29464 6.5625 8.29464ZM19.1562 19.1429H16.192V14.5C16.192 13.3929 16.1696 11.9688 14.6518 11.9688C13.1071 11.9688 12.8705 13.1741 12.8705 14.4196V19.1429H9.90625V9.59821H12.75V10.9018H12.7902C13.1875 10.1518 14.1563 9.36161 15.5982 9.36161C18.5982 9.36161 19.1562 11.3393 19.1562 13.9107V19.1429Z"
                fill="white"
              />
            </svg>

            <span>Linkedin</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Header;
