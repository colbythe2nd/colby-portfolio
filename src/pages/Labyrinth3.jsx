import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { DFFooter, ImageSlides, ListText, ParaText, Title } from '../components';

const carouselData = [
  `images/laby1.jpg`,
  `images/laby2.jpg`,
  `images/laby3.jpg`,
  `images/laby4.jpg`,
  `images/laby5.jpg`,
];

const notableFeatures = [
  `Fully randomized maze generation with several sets of tiles, generated structures, and chests/loot`,
  `Randomized item & enchantment system, items and gear have varying custom stats & modifiers.
   Magic items and spells can also be found on some weapons.`,
  `Some enemies have custom AI/interactions with the player`,
  `Boss mini-dungeons with multiple floors and heavily modified enemy AI`,
  `Upgradable Tab-list minimap system`,
];

const rolesAndAchievements = [
  `Mostly solo project with additional help with building structures and item/enchant naming`,
  `Third itteration of similar projects, with earlier entries recieving praise for its maze/randomized design`,
  `First minimap system attempted on the server, at the time of creation`,
];

const Labyrinth3 = () =>
  <>
    <div className="background">
      <Container className="d-grid gap-4 pt-3">
        <Title
          image="images/laby5.jpg"
          title="Labyrinth 3"
          subtitle="Randomly Generated Dungeon Crawler (Diamondfire, 2023)"
        />
        <ParaText
          title="Overview"
          content="
          Labyrinth 3 is the third iteration of a First Person procedurally generated dungeon crawler.
          The game features a fully randomly generated maze complete with structures, and a large loot pool of items,
          weapons, armor, and magic. Monsters that spawn in the maze may have modified AI, allowing
          them to use abilities like lunging and using magic against the player.
        "
        />
        {/* <YouTubeEmbed videoId="zi2G8dxSkik" /> */}
        <ListText title="Notable Features" entries={notableFeatures} />
        <ListText title="Roles & Achievements" entries={rolesAndAchievements} />
        <ImageSlides data={carouselData} />
        <DFFooter plotId="50109" />
      </Container>
    </div>
  </>;

export default Labyrinth3;
