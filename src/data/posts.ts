export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO YYYY-MM-DD
  linkedinUrl: string;
  coverImage?: string;
};

// Newest first. To add a new post, prepend an entry here.
export const posts: Post[] = [
  {
    id: "waste-8-of-8",
    title: 'Waste 8 of 8: "The most expensive waste in any organisation is the intelligence already inside it that nobody ever asked for."',
    excerpt:
      "At a South African bank, 60 of 90 days in the mortgage approval process sat with a government office nobody had identified. At an energy company, a marketing campaign caused stock to run out because sales and supply never spoke. In both cases the intelligence to fix the problem was already inside the organisation. Today AI compounds the same pattern, use cases deployed without understanding the process, patchwork solutions that make life harder, and the people who could have told you exactly where the problem was still waiting to be asked. Einklang means in unison. Technology, processes, and people looked at together, not in isolation.",
    date: "2026-08-13",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7493594486799843330/",
  },
  {
    id: "waste-7-of-8",
    title: 'Waste 7 of 8: "Bad AI outcomes are rarely the AI\'s fault."',
    excerpt:
      "A finance automation that left five people managing a broken process. A webshop drop-off problem met with an AI agent before anyone asked why customers were leaving. The defect is almost never the technology. It is the decision to deploy before understanding the process, the exceptions, and what people actually do versus what their job description says. The leader moves on to the next AI initiative. The team lives with the consequences.",
    date: "2026-07-28",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7487790118557245441/",
  },
  {
    id: "waste-6-of-8",
    title: 'Waste 6 of 8: "I once printed out a list of 146 reports and hung it in the boardroom. In the era of AI the problem got 10 times worse."',
    excerpt:
      "In 2002, working at a GE subsidiary Swiss bank with 350 employees, compiling every report being produced revealed an astonishing 146. Printing the full list and presenting it to the leadership team in the boardroom led to immediate eliminations, a review of frequency, and agreement on common metric definitions. At almost every client since, the same opportunity was waiting. Today AI has not solved the overproduction problem. It has industrialised it.",
    date: "2026-07-23",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7485959108941000705/",
  },
  {
    id: "waste-5-of-8",
    title: 'Waste 5 of 8: "We are using Formula 1 engines to go to the supermarket."',
    excerpt:
      "At RAISE Summit in Paris, 9,000 AI leaders gathered at the Carrousel du Louvre, with President Macron addressing the room. The progress was genuinely inspiring, but one theme stood out: the struggle to link AI effort to ROI. The core issue is that too many organisations are deploying frontier models and complex AI stacks for tasks a simpler, cheaper tool would handle just as well. Understanding which of the five AI layers, applications, models, infrastructure, chips, and energy, your decision actually touches is where the ROI conversation has to start.",
    date: "2026-07-14",
    linkedinUrl:
      "https://www.linkedin.com/posts/aslam-jilani-736bb12_operationalexcellence-ainative-leansixsigma-activity-7482725104989270017-M-ZU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAACIadoBd2v5_N9wgwMD-wGEqyIuDtYHx7Y",
  },
  {
    id: "waste-4-of-8",
    title: 'Waste 4 of 8: "Your AI runs in seconds. Your decisions take weeks."',
    excerpt:
      "Automation removes the easy waiting, but it cannot touch decision latency, the approval that sits in an inbox for weeks, the pilot that cannot scale because no one will move first. We worked with an engineering company where a CHF 1,000 sign-off rule, introduced during a crisis and never removed, caused multi-week delays long after the turnaround. The bottleneck is rarely the technology. It is the governance structure built around it.",
    date: "2026-07-06",
    linkedinUrl:
      "https://www.linkedin.com/posts/aslam-jilani-736bb12_operationalexcellence-ainative-leansixsigma-activity-7479974852922327040-7aLi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAACIadoBd2v5_N9wgwMD-wGEqyIuDtYHx7Y",
  },
  {
    id: "ai-breakthroughs-move-too-slowly",
    title: 'Waste 3 of 8: "We have the AI breakthroughs. We just move too slowly to keep them."',
    excerpt:
      "At the Swissmem Industrietag, the imagery of a small Swiss fish surrounded by larger predators captured the core issue. Switzerland has the research and the breakthroughs, but ideas get lost moving through slow internal processes while faster, less risk-averse players take them to market. The same friction between idea and execution plays out inside every company.",
    date: "2026-06-25",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:ugcPost:7475839303332483072/",
  },
  {
    id: "waste-2-of-8",
    title: 'Waste 2 of 8: "For decades we were told to reduce inventory. Then the world changed."',
    excerpt:
      "Unused AI models and idle tools are pure waste, but the lesson from Endress+Hauser is that physical inventory is different. By deliberately increasing stock, they turned resilience into a competitive advantage when competitors ran dry. The real question is no longer how lean your inventory is, but how resilient it is.",
    date: "2026-06-18",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7472904674241810432/",
  },
  {
    id: "waste-1-of-8",
    title: 'Waste 1 of 8: "You spent millions on AI tools. Your team is still copy-pasting."',
    excerpt:
      "Companies invest heavily in AI tools and technology partners, but nobody owns the joins between the systems. Data still travels the hard way, copied, emailed, reformatted, and the cost never shows up on a budget line. Mapping those handoffs is where the real opportunity starts.",
    date: "2026-06-09",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7470038000354287616/",
  },
  {
    id: "ai-enabled-to-ai-native",
    title: "From AI-Enabled to AI-Native: Why Most Organisations Are Already Behind",
    excerpt:
      "AI does not fix a broken process. It accelerates it. The real challenge is not adoption, it is redesign. The organisations that will pull ahead are not the ones with the most tools, but the ones that understand their value streams and build the people to lead the transition.",
    date: "2026-06-01",
    linkedinUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7467186994331144193/?commentUrn=urn%3Ali%3Acomment%3A(activity%3A7467186994331144193%2C7468036200524808192)&dashCommentUrn=urn%3Ali%3Afsd_comment%3A(7468036200524808192%2Curn%3Ali%3Aactivity%3A7467186994331144193)&dashReplyUrn=urn%3Ali%3Afsd_comment%3A(7468294771762106369%2Curn%3Ali%3Aactivity%3A7467186994331144193)&replyUrn=urn%3Ali%3Acomment%3A(activity%3A7467186994331144193%2C7468294771762106369)",
  },
];