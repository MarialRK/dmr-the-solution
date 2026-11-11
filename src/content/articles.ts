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
      'Replacing single-use plastic in South Sudan has been anything but easy. Here is what makes it hard, and why we are not giving up.',
    publishedOn: '2026-11-11T00:00:00.000Z',
    body: [
      {
        type: 'p',
        text: 'When I started Nile Green Packaging in Juba in January 2025, the idea fitted in one sentence: replace single-use plastic bags with biodegradable paper ones. Making that idea work in South Sudan has been anything but easy. The environment we work in tests a young company at every step, and the hardest part has not been the bags themselves. It has been getting people to see why they should buy them.',
      },
      { type: 'h2', text: 'Making and sourcing' },
      {
        type: 'p',
        text: 'We work in two ways. We produce bags at our own manual production site, and we import bags to meet demand our hands alone cannot. Manual production is slow and does not scale, but it has taught us how the product is really made and what it really costs. Importing keeps customers supplied in the meantime. Both are steps towards the same goal: automated manufacturing here at home.',
      },
      { type: 'h2', text: 'The hardest question is: why buy?' },
      {
        type: 'p',
        text: 'Plastic bags are cheap and everywhere. For most shops and customers they are simply what bags are, and few people see a reason to change. The government has said it wants single-use plastic phased out completely, and that should make the case for paper obvious. But the phase-out has moved slowly. When enforcement slows, the sense of urgency slows with it, and so does demand for an alternative.',
      },
      {
        type: 'p',
        text: 'This is the reality for many businesses built around a policy change. You can be ready with a better product, and still be waiting for the market to decide it needs one.',
      },
      { type: 'h2', text: 'Our work now: building the demand' },
      {
        type: 'p',
        text: 'So most of our effort today goes into two things. The first is marketing: showing businesses and their customers why paper is worth choosing even before anyone is required to choose it. The second is engaging the government, so that the commitment to phase out plastic becomes something businesses can plan around.',
      },
      {
        type: 'p',
        text: 'The second is by far the most difficult. Policy moves at its own pace, and a young company has to be patient, persistent and well prepared every time it has the chance to be heard. But without it, every business in this space is selling against the convenience of plastic on its own.',
      },
      { type: 'h2', text: 'Why we cannot give up' },
      {
        type: 'p',
        text: 'There are days when it would be easier to stop. But the plastic does not stop. It ends up in drains, on streets and along the Nile, and someone has to build the alternative before the rules finally require one. If we give up now, the switch will simply arrive later, with less local capacity ready to meet it.',
      },
      { type: 'h2', text: 'See where the waste goes' },
      {
        type: 'p',
        text: 'From time to time, Nile Green joins clean-up campaigns with Save the Nile. Standing next to filled refuse sacks is a different experience from reading about plastic pollution in a report. It is a reminder of why the slow work matters: the problem is physical, local and visible, and it does not wait for policy to catch up.',
      },
      { type: 'h2', text: 'Recognition is a responsibility' },
      {
        type: 'p',
        text: 'In December 2025, Nile Green Packaging won ALU Ventures Lab Demo Day, with a US$30,000 prize. It was an important moment for the team, and it gave us the means to keep going. But a prize is not a market. The real test is whether the business can stand on its own, which is why we are working towards automated manufacturing while we build the demand to support it.',
      },
      {
        type: 'p',
        text: 'If there is one lesson I would share with anyone building a business around change, it is this: a good product is not enough. You also have to help build the demand, and sometimes the rules, that it depends on. That part is slower and harder, and it is where the business is really made.',
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
