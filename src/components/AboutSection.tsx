export default function AboutSection() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="h-[4px] w-[20px] bg-foreground/20 my-3" />
        <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-foreground/80">
        <p className="text-base sm:text-lg leading-relaxed">
          Hey there! I&apos;m an 18-year-old self-taught developer and student
          with a passion for technology. As a dedicated Linux enthusiast, I
          thrive on exploring diverse distributions and delving deep into system
          internals.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          My current focus lies in mastering low-level programming and pushing
          the boundaries of web development. I&apos;m always eager to embrace
          new challenges and technologies.
        </p>
      </div>
    </section>
  );
}
