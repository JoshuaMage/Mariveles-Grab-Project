export default function About() {
  const AboutItems = [
    { label: "About Us", description: "Who we are and what we stand for" },
    {
      label: "Inside Grab",
      description: "News and stories from our official blog",
    },
    {
      label: "Investor Relations",
      description: "Information for our investors",
    },
    { label: "Locations", description: "Cities and countries we call home" },
    { label: "Trust & Safety", description: "What we do to keep you safe" },
    {
      label: "Social Impact",
      description: "How we deliver impact to the communities we serve",
    },
    {
      label: "Newsroom",
      description: "Latest news and announcements, fresh off the press",
    },
    {
      label: "Careers",
      description: "Join us on our mission to drive Southeast Asia forward",
    },
    {
      label: "  rabForGood Fund",
      description:
        "Our endowment fund empowering the communities of Southeast Asia",
    },
  ];

}

return (
  <div>
    {AboutItems.map((item, index) => (
      <div key={index}>
        <a href="">{item.label}</a>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
)