import { WowheadTooltip } from "./component";
import { shallow } from "enzyme";
import { Expansion } from "../../models";

describe("WowheadTooltip", () => {
  it("should throw an error with an unsupported expansion", function () {
    expect(() =>
      shallow(<WowheadTooltip expansion={Expansion.Cataclysm} />)
    ).toThrowError();
  });

  it("should throw an error with no items", function () {
    expect(() =>
      shallow(<WowheadTooltip expansion={Expansion.Classic} />)
    ).toThrowError();
  });

  it("should render spell correctly", function () {
    const wrapper = shallow(
      <WowheadTooltip
        expansion={Expansion.Shadowlands}
        spellID={"test-spell-id"}
      />
    );

    expect(wrapper.find("a").props().href).toBe(
      "https://www.wowhead.com/spell=test-spell-id"
    );
  });

  it("should render achievement correctly", function () {
    const wrapper = shallow(
      <WowheadTooltip
        expansion={Expansion.Shadowlands}
        achievementID={"test-achievement-id"}
      />
    );

    expect(wrapper.find("a").props().href).toBe(
      "https://www.wowhead.com/achievement=test-achievement-id"
    );
  });

  it("should render item correctly", function () {
    const wrapper = shallow(
      <WowheadTooltip
        expansion={Expansion.Shadowlands}
        itemID={"test-item-id"}
      />
    );

    expect(wrapper.find("a").props().href).toBe(
      "https://www.wowhead.com/item=test-item-id"
    );
  });

  it("should render quest correctly", function () {
    const wrapper = shallow(
      <WowheadTooltip
        expansion={Expansion.Shadowlands}
        questID={"test-quest-id"}
      />
    );

    expect(wrapper.find("a").props().href).toBe(
      "https://www.wowhead.com/quest=test-quest-id"
    );
  });

  it("should render href correctly", function () {
    const testHref = "twitch.tv/slaye";

    const wrapper = shallow(
      <WowheadTooltip
        expansion={Expansion.Shadowlands}
        questID={"test-quest-id"}
        href={"twitch.tv/slaye"}
      />
    );

    expect(wrapper.find("a").props().href).toBe(testHref);
    expect(wrapper.find("a").prop("data-wowhead")).toBe(
      "https://www.wowhead.com/quest=test-quest-id"
    );
  });
});
