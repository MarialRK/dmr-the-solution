export type Block = { type: 'p' | 'h2'; text: string }

export type WrittenArticle = {
  slug: string
  title: string
  summary: string
  publishedOn: string
  body: Block[]
}

export const writtenArticles: WrittenArticle[] = [
  {
    slug: 'what-a-paper-bag-taught-me',
    title: 'What a paper bag taught me about building in South Sudan',
    summary:
      'Replacing single-use plastic in South Sudan has been hard. Not because the bags are hard to make, but because almost nothing yet requires anyone to switch.',
    publishedOn: '2026-11-11T00:00:00.000Z',
    body: [
      {
        type: 'p',
        text: 'Nile Green Packaging began as an answer to a need that anyone in Juba can see. Single-use plastic bags are everywhere: in markets, in drains, along roadsides and on the banks of the Nile. The government had also said it wanted single-use plastic phased out. When I founded the company in January 2025, it seemed reasonable to expect that the market would follow the policy, and that businesses would soon need an alternative.',
      },
      {
        type: 'p',
        text: 'Almost two years on, I can say plainly that replacing plastic here has been hard. Not because paper bags are difficult to make, but because almost nothing yet requires anyone to switch.',
      },
      { type: 'h2', text: 'How we started' },
      {
        type: 'p',
        text: 'We did not start with a factory. We started with importation. When our first customers placed orders, we imported paper bags to fill them, so we only brought in what someone had already committed to buy.',
      },
      {
        type: 'p',
        text: 'Only after that did we move into manual production, making bags by hand at our own site in Juba. Today we still do both: we import to meet orders, and we produce some bags ourselves.',
      },
      {
        type: 'p',
        text: 'The next step is automated manufacturing. With the support of the ALU Ventures Lab grant, we are doing everything we can to make that transition, and we have already organised the facility it needs. Producing at scale, here at home, is where the business has to go if it is to last.',
      },
      { type: 'h2', text: 'Why it has been so hard' },
      {
        type: 'p',
        text: 'The plan to phase out single-use plastic has not yet been backed by consistent enforcement. In practice, plastic bags remain cheap, easy to find and used everywhere, and there is little pressure on any business to stop using them.',
      },
      {
        type: 'p',
        text: 'That changes everything for a company like ours. A paper bag costs more than a plastic one. Without enforcement, we are asking a shop or a hotel to pay more, voluntarily, for something nobody requires of them. Most will not, and it is hard to blame them. Every sale has to be won on conviction, not on obligation.',
      },
      { type: 'h2', text: 'Who buys today' },
      {
        type: 'p',
        text: 'Our customers so far fall into two groups. The first are businesses that already felt the need themselves: they saw the plastic problem and wanted to be part of the answer before anyone asked them to. The second are businesses we have convinced to think about their ESG responsibilities, their environmental and social impact and how their customers and partners see them. For them, choosing paper is part of showing they take that responsibility seriously.',
      },
      {
        type: 'p',
        text: 'Both groups matter, and we are grateful to them. But neither grows quickly. Each new customer is won one conversation at a time.',
      },
      { type: 'h2', text: 'Our work now' },
      {
        type: 'p',
        text: 'So most of our effort goes into two things. The first is marketing: helping businesses see why paper is worth choosing now, before anyone is required to choose it. The second is engaging the government, so that the commitment to phase out plastic becomes something businesses can actually plan around.',
      },
      {
        type: 'p',
        text: 'The second is by far the most difficult. Policy moves at its own pace, and a young company has to be patient, persistent and well prepared every time it has the chance to be heard. But until implementation moves forward, every business offering an alternative is competing on its own against the convenience of plastic.',
      },
      { type: 'h2', text: 'Why we cannot give up' },
      {
        type: 'p',
        text: 'There are days when it would be easier to stop. But the plastic does not stop. From time to time, Nile Green joins clean-up campaigns with Save the Nile, and standing next to filled refuse sacks is a different experience from reading about pollution in a report. The problem is physical, local and visible, and it does not wait for policy to catch up. If we give up now, the switch will still come one day, but with less local capacity ready to meet it.',
      },
      { type: 'h2', text: 'Recognition is a responsibility' },
      {
        type: 'p',
        text: 'In December 2025, Nile Green Packaging won ALU Ventures Lab Demo Day, with a US$30,000 prize. It was an important moment for the team, and that grant is now going into our move to automated manufacturing. But a prize is not a market. How quickly an automated line can grow will depend a great deal on when the law on single-use plastic actually comes into effect. Enforcement is what will turn a responsible choice into a normal one.',
      },
      {
        type: 'p',
        text: 'If there is one lesson I would share with anyone building a business around change, it is this: a good product is not enough. You also have to build the demand, and sometimes push for the rules, that it depends on. That part is slower and harder, and it is where the business is really made.',
      },
    ],
  },
  {
    slug: 'why-i-chose-explanation-over-accuracy',
    title: 'Why I chose explanation over accuracy in SuddSight',
    summary:
      'My flood-risk system had a more accurate model available. I deliberately used a less accurate one, and I would make the same choice again.',
    publishedOn: '2026-11-11T00:00:00.000Z',
    body: [
      {
        type: 'p',
        text: 'SuddSight, my software engineering capstone, estimates flood risk for counties in South Sudan’s Sudd Wetland using historical satellite data and flood records. I compared six models. The best performer, an LSTM, caught 22 of the 24 real flood months in the data. The model I actually put into the live system, XGBoost, caught only 9.',
      },
      {
        type: 'p',
        text: 'On paper, that looks like the wrong decision. I want to explain why I made it anyway.',
      },
      { type: 'h2', text: 'A number nobody can question is a number nobody can use' },
      {
        type: 'p',
        text: 'A flood-risk score is only useful if the people reading it can act on it. If a system tells a responder that a county faces a 95% risk of flooding, the next question is always: why? Is it the rainfall? The terrain? Last year’s floods? Without an answer, the score is either trusted blindly or ignored, and neither is good enough when lives and livelihoods are involved.',
      },
      {
        type: 'p',
        text: 'XGBoost works with a method called SHAP, which can show exactly how much each factor pushed a prediction up or down, and it can do this quickly. The LSTM could not give explanations of the same quality at the same speed. So I chose the model that can show its reasoning.',
      },
      { type: 'h2', text: 'Testing it against what really happened' },
      {
        type: 'p',
        text: 'For Bor South in September 2024, a month with real flooding, SuddSight estimated a 95.1% risk, and it showed that rainfall over the previous 60 days was the main reason. For Baliet in February 2023, in the dry season, it correctly kept the risk low. Being able to see why the model reached each answer made it much easier to judge whether to trust it.',
      },
      { type: 'h2', text: 'Being honest about the cost' },
      {
        type: 'p',
        text: 'This choice had a real cost, and I reported it openly. SuddSight is a research prototype. It uses historical data rather than live satellite feeds, it works monthly and by county, it was trained on a small sample, and it has not yet been tested with responders in the field. A future version could combine the stronger model with better explanation methods.',
      },
      {
        type: 'p',
        text: 'The broader lesson applies well beyond floods. When technology is meant to support decisions, the best system is not always the one with the highest score. It is the one people can understand well enough to act on.',
      },
    ],
  },
  {
    slug: 'a-business-card-should-keep-working',
    title: 'A business card should keep working after the meeting',
    summary:
      'Most business cards are glanced at and forgotten. A good one does its job long after it changes hands.',
    publishedOn: '2026-11-11T00:00:00.000Z',
    body: [
      {
        type: 'p',
        text: 'People sometimes ask whether business cards still matter when everyone has a phone. In my experience they matter more, not less, but only if they are designed for how people actually meet today.',
      },
      { type: 'h2', text: 'The card is the last thing they hold' },
      {
        type: 'p',
        text: 'At the end of a meeting or an event, your card is often the only physical reminder someone keeps of you. Its weight, its finish and how clearly it says who you are all shape the impression you leave. A card that looks like every other card in the pile tells people very little.',
      },
      { type: 'h2', text: 'Printed details go out of date' },
      {
        type: 'p',
        text: 'The weakness of a printed card is that it is fixed. Change your number, your role or your email, and every card you have handed out is now wrong. That is why I pair printed cards with a digital profile, reached through a QR code or a tap on a smart NFC card. The printed card makes the first impression; the digital profile keeps your details current and lets people call, message or save your contact in seconds.',
      },
      { type: 'h2', text: 'Choose the format for the person, not the trend' },
      {
        type: 'p',
        text: 'Not every professional needs a metal card, and not every company needs NFC. A lawyer may be best served by a quiet letterpress card. A sustainability business may want recycled card that matches its values. A team that meets many people at events may benefit most from smart cards that share details with a tap. The right card depends on who you are and where you meet people.',
      },
      {
        type: 'p',
        text: 'That is the approach I take when I design cards through DMR: start with the person and the setting, then choose the format and finish that suit them, and make sure the card keeps working long after the meeting ends.',
      },
    ],
  },
]
