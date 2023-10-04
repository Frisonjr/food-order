type HeadProps = {
  title: string;
  description?: string;
};

export function Head({ title, description = "" }: HeadProps) {
  document.title = `Zé Foods | ${title}`;
  document.querySelector("[name=description]")?.setAttribute("content", description);

  return null;
}
