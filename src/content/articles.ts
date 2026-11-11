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
      'Nile Green Packaging started with a simple idea: replace single-use plastic bags with paper. Making that idea work has been anything but simple.',
    publishedOn: '2026-11-11T00:00:00.000Z',
    body: [
      {
        type: 'p',
        text: 'When I started Nile Green Packaging in Juba in January 2025, the idea fitted in one sentence: make biodegradable paper bags to replace single-use plastic. Almost everyone I explained it to agreed it was a good idea. Very few of them could tell me how it would pay for itself. That gap between agreement and action is where most of the real work has been.',
      },
      { type: 'h2', text: 'Start with your hands' },
      {
        type: 'p',
        text: 'We did not begin with a factory. We began with a manual production site, stacks of paper and a small team folding, gluing and checking bags by hand. It is slow, and it does not scale. But it taught us things no plan could: which sizes customers actually want, how the bags hold up in use, and how much time each step really takes. When we talk to investors and partners about automated manufacturing now, we are describing a process we have already run ourselves, not one we have only imagined.',
      },
      { type: 'h2', text: 'Paper cannot win on price alone' },
      {
        type: 'p',
        text: 'Plastic bags are cheap, light and everywhere. A paper bag will struggle to beat them on cost, especially at small volumes. So we have had to compete on other things: reliability of supply, presentation, and what using a paper bag says about the business that hands it over. For a shop or a hotel, the bag is the last thing a customer holds before leaving. That moment is worth something, and our job is to make it worth more than the difference in price.',
      },
      { type: 'h2', text: 'See where the waste goes' },
      {
        type: 'p',
        text: 'From time to time, Nile Green joins clean-up campaigns with Save the Nile. Standing next to filled refuse sacks is a different experience from reading about plastic pollution in a report. It is a reminder that the problem we are working on is physical, local and visible, and that a better product only matters if it actually replaces what ends up on the ground.',
      },
      { type: 'h2', text: 'Recognition is a responsibility' },
      {
        type: 'p',
        text: 'In December 2025, Nile Green Packaging won ALU Ventures Lab Demo Day, with a US$30,000 prize. It was an important moment for the team, and it gave us the means to keep going. But a prize is not a market. The real test is whether the business can stand on its own, which is why our focus now is the move from pilot production to automated manufacturing.',
      },
      {
        type: 'p',
        text: 'If there is one lesson I would share with anyone starting a business close to home, it is this: keep the idea simple, and expect the work to be complicated. The simplicity is what lets people believe in it. The complication is where the business is actually built.',
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
