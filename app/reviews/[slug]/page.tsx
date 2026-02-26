import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReviewNav from "@/components/ReviewNav";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StarRating from "@/components/StarRating";
import StatusBadge from "@/components/StatusBadge";
import CommentSection from "@/components/CommentSection";
import ReactMarkdown from "react-markdown";
import type { Review } from "@/lib/types";

const REVIEWS: Review[] = [
  {
    slug: "before-the-coffee-gets-cold",
    title: "Before the Coffee Gets Cold",
    author: "Toshikazu Kawaguchi",
    date: "2025-01-06",
    rating: 4.5,
    status: "Finished",
    coverImage: "/covers/before_the_coffee_gets_cold_2.jpg",
    summary: "In a small back alley in Tokyo, a mysterious cafe offers its customers the chance to travel back in time, provided they return before their coffee gets cold.",
    content: `
## First Impressions

"Before the Coffee Gets Cold" is a masterclass in quiet, emotional storytelling. While the premise of time travel often leans toward the grand and spectacular, Toshikazu Kawaguchi keeps the stakes intimately small: a quiet cafe in a Tokyo alleyway. It is a beautiful, fragile, and profoundly sad exploration of the things we leave unsaid.

## The Cast of the Cafe

- Kazu Tokita: The enigmatic, stoic waitress who pours the time-traveling coffee with rhythmic, ritualistic precision.
- Nagare Tokita: The cafe’s owner and Kazu's cousin—a big-hearted man who provides a sense of normalcy amidst the supernatural.
- The Ghost in the Chair: A silent woman in a white dress who occupies the "time travel seat" and serves as a constant, eerie reminder of the cafe’s rules.
- The Seekers: A rotating cast of visitors—from a woman chasing a lost lover to a nurse caring for a husband with Alzheimer's—who each bring a unique, heart-wrenching motive to the chair.

## The Mechanics of Regret

The brilliance of the novel lies in its rules. You can go back, but you cannot leave the chair, and you cannot change the present. These constraints strip away the fantasy of "fixing" life and force the characters to focus on the only thing that truly matters: **emotional closure.** It turns time travel into a medium for one last conversation, one last "thank you," or a final goodbye.

## The Emotional Core

The final chapter is where the book truly breaks you. It captures that terrifying yet beautiful reality of losing a loved one—the desperate wish for one more minute, even knowing that they will never return to your daily life. It is scary to face that finality, but there is a strange comfort in the way Kawaguchi portrays the power of a single conversation to heal a broken heart.

## Themes

* The Weight of Unspoken Words: The burden we carry when we don't say goodbye properly.
* The Illusion of Change: Understanding that while we can't change the past, we can change how we carry it.
* Grief and Healing: The intersection of deep sadness and the beauty of a memory.
* The Value of the Present: A reminder to cherish the coffee while it’s still hot.

## Verdict

An essential read for anyone who has ever looked back with a "what if." It’s highly emotional and will stay with you long after the final page is turned. Highly recommended for those who love stories about the human heart. **Bring tissues.**
`,
  },
  {
    slug: "never-let-me-go",
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    date: "2024-12-26",
    rating: 4,
    status: "Finished",
    coverImage: "/covers/never_let_me_go.jpg",
    summary: "In an isolated boarding school, a group of students slowly discovers the heartbreaking truth about their shared destiny and the dark, utilitarian purpose behind their seemingly idyllic lives.",
    content: `
"Never Let Me Go" is a ghost story where the characters aren't dead yet. Ishiguro takes a high-concept sci-fi premise—children raised solely to serve as organ donors—and strips away the action to focus on the quiet, domestic life of the victims. It is a tragedy that doesn't scream; it whispers, making the eventual heartbreak feel much heavier.

## The Trio of Hailsham

- Kathy H.: Our narrator and a "Carer." She is observant, deeply nostalgic, and the thread that holds their fading history together.
- Ruth: Complex, often manipulative, and desperate to believe in a world larger than the one she was built for.
- Tommy: Earnest and prone to "tantrums" that we eventually realize are the only sane reaction to an insane world.

## The Acceptance of Fate

The most chilling part of this story is the lack of rebellion. There are no grand escapes or plot twists where they take down the system. Instead, you see these characters accepting their "donations" and their "completions" as an absolute reality. Watching them try to find meaning, art, and love within a pre-determined life is nothing short of a tragedy.

## The Emotional Core

The ending was totally unexpected in its simplicity. While you spend the book waiting for a miracle, the finality of their situation hits you all at once. It explores the desperate hope of people who have lost everything but still want a few more years to simply exist with the people they love. It’s a scary, beautiful look at what it means to have a soul.

## Themes

* The Illusion of Hope: The "deferrals" they seek and the lies they tell themselves to keep going.

* Commodification of Life: How society ignores the humanity of those it uses for its own survival.

* The Fragility of Memory: Kathy’s attempt to hold onto Hailsham before it’s forgotten forever.

* The Finality of "Completion": The unique way Ishiguro describes the end of their journey.

## Verdict

This is a book that stays in your bones. It isn't a fast-paced thriller, but a slow-burn meditation on what we owe to each other. It’s a beautiful tragedy that rewards those who are willing to feel the weight of it.`,
  },
  {
    slug: "death-on-gokumon-island",
    title: "Death On Gokumon Island",
    author: "Seishi Yokomizo",
    date: "2025-07-29",
    rating: 4,
    status: "Finished",
    coverImage: "/covers/death_on_gokumon_island.jpg",
    summary: "On the secluded Gokumon Island, scruffy detective Kosuke Kindaichi must decipher a dying man’s cryptic warning to protect three sisters from a series of gruesome, ritualistic murders rooted in a bitter family legacy.",
    content: `
## First Impressions

The most striking element of **Death on Gokumon Island** is its oppressive, isolated atmosphere. While Yokomizo excelled at setting the scene in his previous works, he takes it to another level here. Immersing yourself in this specific historical Japanese setting feels like stepping into a different world—one governed by clannish rules and dark secrets.

## The Cast of the Island

- Kosuke Kindaichi: Our scruffy, stuttering detective. He is an outsider whose sharp mind contrasts with his disheveled appearance.
- The Three Sisters: The daughters of the head of the Kitatoya family, whose lives are the center of a cryptic, dying prophecy.
- The Island Locals: A clannish, tight-knit community that resents outside meddling, making every interview a battle for the truth.
- The Mysterious Killer: An invisible force executing ritualistic murders inspired by haiku, lurking in the shadows of the family's legacy.

## The Mechanics of the Mystery

The plot is significantly more intense than the first book in the series. Because the villagers are so tight-lipped and protective of their secrets, every small clue and stray detail carries immense weight. It forces you to pay closer attention, making the eventual "ah-ha" moment feel earned and incredibly satisfying.

## The Historical Perspective

It is important to note that since this was written in the late 1940s, it contains a few old-fashioned stereotypes. However, if read with the right historical perspective, these elements don't detract from the brilliance of the puzzle. It serves as a fascinating time capsule of postwar Japanese social structures.

## Themes

- Postwar Trauma: The lingering shadows of WWII on the soldiers returning home and the families they left behind.
- The Danger of Tradition: How rigid family hierarchies and ancient customs can become motives for modern violence.
- Isolation and Insularity: The "locked-room" feel of an island community that polices its own.
- The Logic of the Macabre: Ritualistic murders that follow a strange, poetic internal logic.

## Verdict

This is a powerhouse of a murder mystery. It showcases the incredible potential of the Kindaichi series, blending a fascinating historical setting with a fiendishly clever plot. If you love classic "Golden Age" mysteries with a dark, Japanese twist, this is essential reading.`,
  },
  {
    slug: "picture-of-dorian-gray",
    title: "The Picture Of Dorian Gray",
    author: "Oscar Wilde",
    date: "2025-07-26",
    rating: 5,
    status: "Finished",
    coverImage: "/covers/picture-of-dorian-gray.png",
    summary: "In 19th-century England, a beautiful young man remains eternally youthful while his hidden portrait grotesquely withers and decays, bearing the physical scars of his descent into a life of sin and moral corruption.",
    content: `
## First Impressions

**The Picture of Dorian Gray** is surprisingly short, yet entirely immersive. Rather than a sprawling Victorian epic, it reads like an intense, claustrophobic character study. It asks a terrifying question: What would you do if you never had to face the physical consequences of your actions? Watching Dorian transition from a naive muse to a hollow, cruel aristocrat is a fascinating psychological descent.

## The Painter's Obsession

One of the most striking elements of the book is the intense infatuation the painter, Basil Hallward, has with Dorian's face. Is it just a "painter's thing"? Partially. Basil represents the philosophy of "Aestheticism"—the pursuit of absolute, uncorrupted beauty. To Basil, Dorian is more than a model; he is a living masterpiece, a pure aesthetic ideal. But beneath the artistic devotion is a quiet, tragic romantic obsession. Basil loves the idea of Dorian's innocence just as much as his face, and painting the portrait is his doomed attempt to freeze that perfection in time.

## The Poisonous Prose

Oscar Wilde's wit is sharper than a scalpel, largely delivered through the cynical, corrupting voice of Lord Henry. The dialogue is meant to be seductive and dangerous. Here are a few lines that struck me the most:

> "It is silly of you, for there is only one thing in the world worse than being talked about, and that is not being talked about."

> "But beauty, real beauty, ends where an intellectual expression begins. Intellect is in itself a mode of exaggeration, and destroys the harmony of any face."

> "Genius lasts longer than Beauty. That accounts for the fact that we all take such pains to over-educate ourselves. In the wild struggle for existence, we want to have something that endures, and so we fill our minds with rubbish and facts, in the silly hope of keeping our place."

> "You know more than you think you know, just as you know less than you want to know."

## Themes

* The Superficiality of Society: A culture that forgives any moral decay as long as the person remains beautiful and charming.
* The Corruption of Influence: How easily a pure soul can be poisoned by a charismatic mentor.
* Art vs. Life: The terrifying reality that art (the painting) is forced to bear the burden of life's ugly truths, while Dorian gets to live as a piece of static, unaging art.

## Verdict

A masterpiece that is meant to be studied, highlighted, and debated. It is a brilliant, unsettling reflection on vanity and the masks we wear for society.`,
  },
  {
    slug: "the-stranger",
    title: "The Stranger",
    author: "Albert Camus",
    date: "2024-04-14",
    rating: 3,
    status: "Finished",
    coverImage: "/covers/Stranger_Albert_Camus_1.png",
    summary: "In a sun-drenched Algiers, a detached and indifferent man is drawn into a senseless murder, ultimately facing his own execution while stubbornly embracing the cold, irrational absurdity of existence.",
    content: `## First Impressions
*The Stranger* is a chilling lesson in absurdity. It explores the "nakedness of man faced with the absurd"—the moment we realize the universe doesn't care about our morals or our meaning. Reading this as an adult is a far different experience than reading it as a student; Meursault no longer feels like a theoretical character, but like a reflection of the bleak, bottom-of-the-well nights we all try to forget.

## The Empathy Void
Meursault is a man who seems to lack even a shred of humanity. He is detached, indifferent, and refuses to fight for his own life, choosing instead to simply accept fate. It raises a terrifying question: Are there truly people like this in the world? Or is Meursault just an "everyman" who has stopped suppressing the truth? While his lack of empathy is disturbing, there is a strange honesty in his refusal to perform grief at his mother's funeral or love for Marie. He is on trial not just for a murder, but for his failure to cry.

## The Weight of the Absurd
Camus uses the sun-drenched Algerian heat as a character itself—a physical force that eventually "causes" a senseless murder. The brilliance of the book lies in Part Two, where a courtroom of "suits" tries to enforce meaning on a meaningless act. They act like angels at the pearly gates, judging Meursault’s soul because they cannot handle the truth: that sometimes, there is no *why*.

> "It was like knocking four quick times on the door of unhappiness."

## The Cold Logic of Meursault
The prose is crisp and immediate, capturing a man who exists only in the "today." Here are the lines that define his unsettling philosophy:

> "Maman died today. Or yesterday maybe, I don’t know."

> "Since we're all going to die, it's obvious that when and how don't matter."

> "To stay or to go, it amounted to the same thing."

> "I felt that I had been happy and that I was happy again... I had only to wish that there be a large crowd of spectators the day of my execution and that they greet me with cries of hate."

## Themes
* **The Absurdity of Justice:** A legal system that judges a man’s character (his relationship with his mother) more than his actual crime.
* **The Indifference of Nature:** The sun and sea as beautiful, yet cold, witnesses to human tragedy.
* **Oedipal Substitutes:** The transition from the coldness of Maman to the sensory, physical heat of Marie.
* **The Burden of Memory:** The idea that a man who lived only one day could survive a hundred years in prison on memories alone.

## Verdict
A probing look into the folds of existence. It forces you to look at the indifferent stars and wonder: if our actions bear so much weight in a world without meaning, does that make us happy or miserable? It is a fantastic character study that stays with you long after the trial ends.

---

*Meursault's indifference is legendary, but is it relatable? Would you be happier if you stopped searching for meaning? Let’s discuss in the comments.*`,
  },
  {
    slug: "crime-and-punishment",
    title: "Crime And Punishment",
    author: "Fyodor Dostoevsky",
    date: "2023-09-12",
    rating: 4,
    status: "Currently Reading",
    coverImage: "/covers/crime_and_punishment.jpg",
    summary: "In the grim slums of St. Petersburg, a desperate former student commits a calculated murder to prove his superhuman superiority, only to find his sanity and soul slowly dismantled by the relentless weight of his own conscience.",
    content: `## First Impressions
*Crime and Punishment* is a towering inferno of literature. It is an excruciatingly detailed psycho-epic that feels less like a book you read and more like a moment in your life you lived. Coming to this as an adult is a revelation; it’s no longer a "school assignment" but a haunting companion that shadows your own thoughts on morality, choice, and the crushing weight of a guilty conscience.



## The Napoleonic Delusion
Raskolnikov is a character to be both studied and feared. He is an arrogant, self-delusional former student who divides the world into two classes: the Napoleonic elite, who are free to overstep moral laws for a "higher purpose," and the ordinary "louses." His murder of the pawnbroker isn't just about money—it’s a cold, calculated experiment to see if he belongs to the elite. But as the axe falls, the theory shatters, leaving behind a man drowning in his own humanity.

## The Fever of Guilt
Dostoevsky expertly straps the reader to the emotional states of his characters. The prose is excessive, operatic, and relentless—much like a fever dream. During the reading, you find yourself sharing Raskolnikov’s burden; the walls of his tiny "closet" apartment close in on you, and the cat-and-mouse games with the brilliant Inspector Porfiry Petrovich make your own hands feel numb and stiff.

> "To go wrong in one's own way is better than to go right in someone else's."

## Poisoned Thoughts & Holy Redemption
The dialogue in this novel is "turned up to eleven." It is a psychological minefield where every character is a foil for Raskolnikov’s soul. Whether it is the spineless patience of Razumikhin or the tragic, sacrificial faith of Sonya, everyone pushes Raskolnikov closer to the cliff of his own confession.

> "I did not bow down to you, I bowed down to all the suffering of humanity."

> "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth."

## Themes
* **The Myth of the Extraordinary Man:** The dangerous allure of believing one is above the law.
* **The Social Hierarchy of Poverty:** A bleak look at 19th-century St. Petersburg where women are often forced into moral compromises just to survive.
* **Moral Entropy:** The idea that we don't change our inner lives, but we must constantly make amends for our mistakes.
* **Redemption through Suffering:** The long, slow "climb in empty air" toward becoming something better than our worst acts.

## Verdict
This is not an easy hill to climb, but it is a worthwhile one. It is a masterpiece that captures the raw core of the human condition when it is at its most gruesome and vulnerable. It proves that our own inner consciousness can dish out a far greater punishment than any legal system ever could. 

---

*Do you believe some people are 'extraordinary' enough to live above the law, or is that just Raskolnikov’s fever talking? Tell me your name and your thoughts below.*`,
  },
];

export async function generateStaticParams() {
  return REVIEWS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const review = REVIEWS.find((r) => r.slug === params.slug);
  if (!review) return {};
  return { title: review.title, description: review.summary };
}

export default function ReviewPage({ params }: { params: { slug: string } }) {
  const review = REVIEWS.find((r) => r.slug === params.slug);
  if (!review) notFound();

  const formattedDate = new Date(review.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <ReviewNav />

      <main>
        {/* Hero band */}
        <div className="bg-[var(--color-bg-soft)] border-b border-[var(--color-border)] py-8">
          <div className="site-container">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">

              {/* Cover */}
              <div className="relative mx-auto aspect-[2/3] w-36 flex-shrink-0 overflow-hidden rounded-[4px] shadow-card-hover md:mx-0 md:w-44">
                <Image src={review.coverImage} alt={`Cover of ${review.title}`} fill
                  sizes="(max-width: 768px) 144px, 176px" className="object-cover" priority />
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
                  <StatusBadge status={review.status} />
                </div>
                <h1 className="font-heading text-3xl font-bold text-[var(--color-primary)] text-balance">
                  {review.title}
                </h1>
                <p className="font-heading text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                  by {review.author}
                </p>
                <StarRating rating={review.rating} />
                <p className="font-body text-xs text-[var(--color-muted)]">Reviewed on {formattedDate}</p>
                <p className="font-body text-sm leading-relaxed text-[var(--color-text)] max-w-[55ch]">
                  {review.summary}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="site-container py-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start">

            {/* Article — 2/3 */}
            <div className="min-w-0 flex-[2]">
              <article className="prose prose-sm max-w-none
                prose-headings:font-heading prose-headings:text-[var(--color-primary)] prose-headings:font-bold
                prose-p:font-body prose-p:text-[var(--color-text)] prose-p:leading-[1.75]
                prose-a:text-[var(--color-secondary)] prose-a:no-underline hover:prose-a:underline
                prose-li:text-[var(--color-text)] prose-li:font-body
                prose-hr:border-[var(--color-border)]
              ">
                <ReactMarkdown>{review.content}</ReactMarkdown>
              </article>

              <CommentSection slug={review.slug} />
            </div>

            {/* Sidebar — 1/3 */}
            <aside className="w-full lg:w-72 lg:flex-shrink-0">
              <Sidebar />
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
