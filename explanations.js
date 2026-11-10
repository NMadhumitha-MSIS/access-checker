module.exports = {
  "image-alt": {
    title: "Some pictures have no description",
    why: "People who are blind use software that reads the page aloud. Without a description, they only hear 'image' and miss what it shows.",
    fix: "Add a short description to each picture, like 'Fresh sourdough loaves on a wooden table'. Most website builders have an 'alt text' box for each image."
  },
  "role-img-alt": {
    title: "Some icons or pictures have no description",
    why: "Some images, often icons or background pictures, are built in a special way and have no description, so read-aloud software skips what they show.",
    fix: "Ask your web designer to add a short description to each of these images."
  },
  "image-redundant-alt": {
    title: "Some picture descriptions repeat nearby text",
    why: "When a picture's description matches the words right next to it, read-aloud software says the same thing twice, which is tiring for visitors.",
    fix: "Describe what the picture actually shows, or leave the description empty for purely decorative pictures."
  },
  "color-contrast": {
    title: "Some text is hard to read",
    why: "Faint text against its background is hard to read for people with weak eyesight, and for anyone on a phone in bright sunlight.",
    fix: "Make the text darker or the background lighter so they clearly stand apart."
  },
  "link-in-text-block": {
    title: "Some links only stand out by color",
    why: "Links inside a paragraph are shown only in a different color. People who are color blind may not notice them at all.",
    fix: "Underline links inside text, or make them bold, so they stand out without relying on color."
  },
  "html-has-lang": {
    title: "The page does not say what language it is in",
    why: "Read-aloud software uses this to pronounce words correctly. Without it, the page may be read with the wrong pronunciation.",
    fix: "Ask your web designer to set the page language. It is one small setting."
  },
  "html-lang-valid": {
    title: "The page's language setting is wrong",
    why: "The page uses a language code that does not exist or is misspelled, so read-aloud software may pronounce words incorrectly.",
    fix: "Ask your web designer to set the correct language code, like 'en' for English."
  },
  "valid-lang": {
    title: "The page's language setting is wrong",
    why: "The page uses a language code that does not exist or is misspelled, so read-aloud software may pronounce words incorrectly.",
    fix: "Ask your web designer to set the correct language code, like 'en' for English."
  },
  "link-name": {
    title: "Some links do not say where they go",
    why: "Read-aloud software just says 'link', like a door with no sign. Visitors cannot tell what clicking it will do.",
    fix: "Give every link clear words, like 'View our menu' instead of an empty icon."
  },
  "skip-link": {
    title: "The 'skip to content' shortcut is broken",
    why: "Many sites have a shortcut that lets keyboard and read-aloud users jump past the menu straight to the content. Here, it points to a spot that does not work, like an elevator button for a floor that does not exist.",
    fix: "Ask your web designer to fix where the 'skip to content' link points."
  },
  "button-name": {
    title: "Some buttons have no name",
    why: "Read-aloud software just says 'button', so visitors cannot tell if it means Buy, Search, or Close.",
    fix: "Give each button clear words describing what it does."
  },
  "select-name": {
    title: "A dropdown menu has no label",
    why: "A visitor using read-aloud software hears a dropdown but not what it is for, like a form with the question missing.",
    fix: "Add a clear label to each dropdown, such as 'Choose a date'."
  },
  "label": {
    title: "Some form boxes have no label",
    why: "Visitors who cannot see the screen will not know what to type, like a form with the questions erased.",
    fix: "Add a clear label to each box, such as 'Your email' or 'Phone number'."
  },
  "frame-title": {
    title: "An embedded box has no name",
    why: "Sites often show content from elsewhere in a box, like a map, video, or booking form. Without a name, read-aloud software cannot tell visitors what is inside.",
    fix: "Ask your web designer to give each embedded box a short name, like 'Map to our office' or 'Book an appointment'."
  },
  "document-title": {
    title: "The page has no title",
    why: "The title is the first thing read-aloud software says. Without it, visitors cannot tell which page they are on.",
    fix: "Give every page a short title, like 'Menu | Rosa's Bakery'."
  },
  "page-has-heading-one": {
    title: "The page has no main heading",
    why: "A main heading is like the title on a book cover. People using read-aloud software often jump to it first to learn what the page is about.",
    fix: "Add one clear main heading at the top of each page, like 'Welcome to Our Salon'."
  },
  "heading-order": {
    title: "Headings skip levels",
    why: "Headings work like a table of contents. Skipping levels makes the page confusing for people who navigate by headings.",
    fix: "Use headings in order: a main heading first, then smaller subheadings, without skipping."
  },
  "landmark-one-main": {
    title: "The page has no clearly marked main section",
    why: "People using read-aloud software often skip straight to the main content. Without it marked, they must listen through everything first.",
    fix: "Ask your web designer to mark the main content area of each page."
  },
  "landmark-main-is-top-level": {
    title: "The main section is tucked inside another section",
    why: "The main content is placed inside another section, so read-aloud software has trouble jumping straight to it.",
    fix: "Ask your web designer to make the main content its own top-level section."
  },
  "landmark-contentinfo-is-top-level": {
    title: "The footer is tucked inside another section",
    why: "The footer (the bottom part with contact details) is placed inside another section, which confuses read-aloud software trying to jump to it.",
    fix: "Ask your web designer to move the footer so it sits on its own at the bottom of the page."
  },
  "landmark-no-duplicate-contentinfo": {
    title: "The page has more than one footer",
    why: "Read-aloud software expects one footer per page. Two footers leave visitors unsure which one has the contact details.",
    fix: "Ask your web designer to combine them into a single footer."
  },
  "landmark-unique": {
    title: "Two page sections have the same label",
    why: "When two sections, like two menus, share the same label, visitors using read-aloud software cannot tell them apart, like two doors with the same sign.",
    fix: "Give each section its own name, like 'Main menu' and 'Footer menu'."
  },
  "region": {
    title: "Parts of the page are not organized into sections",
    why: "Clear sections (header, menu, main content, footer) work like chapters in a book, helping visitors who cannot see the screen find their way.",
    fix: "Ask your web designer to group the page content into labeled sections."
  },
  "aria-required-children": {
    title: "A menu or list is missing pieces read-aloud software expects",
    why: "Part of the page is labeled as something special, like a menu, but is missing the items inside it. Read-aloud software gets confused, like a table of contents with no chapters.",
    fix: "Ask your web designer to check that each menu or tab section contains the right items."
  },
  "aria-allowed-role": {
    title: "Some parts of the page are labeled as the wrong type",
    why: "Part of the page is labeled as one kind of thing when it is really another, so read-aloud software describes it wrongly, like an 'Exit' sign on a closet door.",
    fix: "Ask your web designer to correct or remove these labels."
  },
  "meta-refresh": {
    title: "The page reloads or jumps to another page on its own",
    why: "When a page changes by itself after a few seconds, people who read slowly or use read-aloud software can lose their place or never finish reading.",
    fix: "Ask your web designer to send visitors straight to the right page instead of using a timed jump."
  }
};