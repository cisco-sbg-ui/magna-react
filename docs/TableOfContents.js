import {AIcon, ATab, ATabGroup} from "../framework";
import {getRoundedBoundedClientRect} from "../framework/utils/helpers";
import "./TableOfContents.scss";

const toKebabCase = (str) => str.replaceAll(" ", "-").toLowerCase();

const TableOfContents = ({items, activeSection, setActiveSection}) => {
  return (
    <section className="toc">
      <ATabGroup className="ml-5" vertical>
        {items?.map((section, i) => (
          <ATab
            tabKey={section}
            selected={toKebabCase(section) === activeSection}
            key={section}
            onClick={() => {
              setActiveSection(toKebabCase(section));
              const heading = document.querySelectorAll("h4")[i];

              if (heading) {
                const coords = getRoundedBoundedClientRect(heading);

                // Subtracting 110 was determined through trial-and-error in
                // order to account for the sticky positioned header that was
                // hiding the text being scrolled into the screen. Although
                // 110 is not the height of the header, I added some extra
                // buffer so that the actual heading content is a bit more
                // centered on the screen.
                window.scrollTo(0, coords.top + window.pageYOffset - 110);
              }
            }}
          >
            {section}
          </ATab>
        ))}
      </ATabGroup>
    </section>
  );
};

export default TableOfContents;
