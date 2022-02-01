import { Story, Meta } from '@storybook/react';
import React from 'react';

import Richtext, { RichttextProps } from './Richtext';
import docs from './docs.mdx';

export default {
  title: 'Components/Content/Richtext',
  component: Richtext,
  parameters: {
    docs: {
      page: docs
    }
  }
} as Meta;

const Template: Story<RichttextProps> = args => <Richtext {...args} />;

export const Default = Template.bind({});
Default.args = {
  content:
    '<p>Dolorum nam consequatur veniam qui. Tenetur fugit quod aspernatur dolorem dignissimos ut repudiandae minima temporibus. Vel cumque esse est dolorem itaque iure minima. Aliquid doloremque natus totam voluptatem reiciendis veniam ratione praesentium. Aut dicta neque quisquam ut ipsa dolorem nihil ad id. Soluta eligendi tempore modi. <a href="">sint quia beatae</a> Ullam minus quidem dolore. Molestiae est itaque deleniti deserunt inventore sunt velit enim. Nam quia dolore. Ut maiores nihil. Voluptates amet beatae temporibus rerum. Eveniet nam maiores cumque dignissimos nulla neque aliquid.</p><p>Et aperiam et impedit quidem veritatis quisquam autem cum. Possimus quidem et ut omnis consequatur quidem facere ab. Autem dolores aliquid quo rerum modi ut voluptatem rerum. Unde fugiat quo veritatis id. Atque rerum voluptate iusto tempora aliquid. Sint dignissimos facere earum corrupti officia explicabo ipsa quo. <a href="https://google.com">external commodi ut voluptatem</a> Quia quod impedit dolores hic dolore magnam. Voluptate distinctio voluptas et. Aut qui aliquam officiis non accusantium et iure eius.</p><h2>Headline H2</h2><p>Est suscipit nulla provident repellendus iusto. Necessitatibus eum repellat consequuntur saepe consequatur. Ipsum incidunt illum eligendi labore ut.</p><h3>Headline H3</h3><p>Ut deserunt culpa ut repudiandae. Quaerat impedit tempora quasi. Veritatis corporis sit maxime ut enim quia. Quia accusantium optio velit.</p><h4>Headline H4</h4><p>Laudantium eaque deleniti ea totam molestias cupiditate libero dicta in. Nostrum quaerat consequatur quo consequuntur quibusdam similique. Et distinctio assumenda eius blanditiis. Cupiditate et assumenda recusandae praesentium. Possimus vitae corporis rem debitis rerum consequuntur laudantium ipsum. Sint et eos labore.</p><p>Dolorem expedita officiis dolorem quo perferendis ad tenetur. Et adipisci minus sed quo totam. Incidunt qui omnis id. Deleniti et molestias doloribus est officia totam. Optio occaecati deleniti quo repellendus voluptatem consequuntur illum.</p><p>Aliquid molestiae id neque consequatur reprehenderit labore. Sed hic quis laudantium id vero. Et quam sed voluptate quaerat sint fuga eveniet repellendus porro. Ea explicabo consequuntur odio. Perferendis ut non quisquam repellendus quidem. Excepturi magni dolorum animi quis.</p><p><strong>Recusandae delectus et accusantium aut delectus veniam officiis. Non quo facere non autem illo quaerat ullam amet. Dolorum facere dolor veritatis sit. Eos molestiae officia sit minima fuga ullam. <a href="">voluptas dolore dicta</a> Libero molestiae quis consectetur et. Ut tempore vel quia ducimus. Dicta sit molestiae pariatur quis. Qui pariatur ratione. Provident repellendus optio et voluptatem ullam odio odit perspiciatis.</strong></p><p><em>Omnis veniam sed alias in rerum maxime corporis est. Aut doloribus voluptatum veniam maiores ut. Id repellendus omnis ut suscipit ut. Placeat voluptatem est eos consequatur in quisquam voluptas deleniti maiores. Molestias veniam maiores nihil perferendis voluptatem et exercitationem aliquid itaque. Necessitatibus dolorum quo quas tempore est deserunt laudantium. <a href="">error porro sint</a> Ipsum libero voluptas atque dolorum laudantium. Eos voluptatibus enim voluptatum nihil est recusandae est nihil accusamus. Officiis nemo voluptatem distinctio sint dolorum eum odit dolor.</em></p><ul><li>IT18E003000808925Y191FI1264</li><li>QA40QYDI51933827B627X92541144</li><li>GL2900521771300231<ul><li>SM15U3019515842985659I93312</li><li>SE5300718254296005200463</li><li>MT65RVUD970040724381643V8605023</li></ul></li></ul><ol><li>Jeanette Fahey I</li><li>Amber Prohaska</li><li>Michael Denesik<ol><li>Dwayne Howell</li><li>Homer Cole</li><li>Melba Miller MD</li></ol></li></ol>'
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  children: (
    <>
      <p>
        Reprehenderit eius odit saepe. Pariatur voluptate nihil. Possimus voluptas labore voluptatem
        accusantium. Explicabo sed beatae quo velit laudantium nostrum tenetur corrupti. Qui culpa
        aut vitae hic exercitationem quidem sunt non. <a href="">animi eveniet ipsa</a> Adipisci sit
        ab. Laboriosam mollitia blanditiis incidunt iure. Doloribus quae quibusdam esse magni
        nostrum distinctio sint eos dolorem. Expedita maiores qui.
      </p>
      <p>
        Ut fugiat et ipsam dicta consequuntur ullam. Eos non consequatur dolorum eius expedita. Sed
        reprehenderit repellat laborum ea dolor dolor repellat. Aspernatur harum nesciunt pariatur
        id suscipit. <a href="https://google.com">external ullam ipsa sint</a> Distinctio qui
        maiores beatae voluptatum aut quia. Assumenda quis asperiores est facilis asperiores earum
        aperiam voluptatibus. Autem autem ut accusamus non quis velit quae. Cupiditate illum
        reprehenderit aut.
      </p>
      <h2>Headline H2</h2>
      <p>
        Qui illo omnis tempore dolorem perferendis. Accusantium nesciunt possimus et corporis quas
        quas ratione. Vitae laborum tempora sunt quo aspernatur unde fugiat assumenda qui.
        Temporibus quo inventore non cum. Doloribus consectetur consequatur est ex ullam explicabo.
        Et mollitia in.
      </p>
      <h3>Headline H3</h3>
      <p>
        Consequatur eaque voluptatem natus ex. Non laboriosam voluptas odit atque. Sed qui iure.
        Eligendi voluptas ut provident eaque. Ullam animi dolorem odit voluptate deserunt
        asperiores.
      </p>
      <h4>Headline H4</h4>
      <p>
        Tempore sint reiciendis cumque deserunt. Voluptas deleniti nemo odio quis perspiciatis
        accusantium quis. Et aliquid sed corrupti dolorem voluptas ipsum. Velit excepturi accusamus
        optio.
      </p>
      <p>
        Ut minima consequatur illum adipisci blanditiis. Autem consequuntur tempore optio dicta
        voluptas aspernatur. Aut fuga qui et ipsa maiores incidunt. Fugiat eos et assumenda
        voluptatem.
      </p>
      <p>
        Labore eius inventore sint. Veniam iste impedit laborum est. Et porro maxime voluptatem
        officiis minus. In similique molestiae rem ut placeat sunt nihil aperiam. Similique et ad et
        cum ea aliquam unde soluta.
      </p>
      <p>
        <strong>
          Molestiae eligendi ad harum ea mollitia excepturi. Laudantium placeat aliquam veritatis
          impedit. Quis saepe molestiae quibusdam voluptatum. Non enim tenetur voluptates sed non.{' '}
          <a href="">repudiandae inventore ab</a> Ratione voluptatem rerum vero qui aspernatur
          libero. Ducimus quaerat distinctio aliquid voluptatem eos quis. Sunt id saepe. Vero
          reprehenderit ratione et.
        </strong>
      </p>
      <p>
        <em>
          Dolorem aliquid illum deserunt. Est eum sit enim sed molestiae reiciendis doloribus.
          Asperiores veritatis suscipit repudiandae. Nobis sed molestiae quibusdam ad ab assumenda.{' '}
          <a href="">aut nemo similique</a> In eaque sapiente voluptatem voluptatem minima nihil et
          sed cum. Pariatur aliquid consequatur ea et itaque impedit aut tempore asperiores.
          Officiis numquam est consequatur aut. Aliquam nesciunt est id nemo.
        </em>
      </p>
      <ul>
        <li>NO9400925096272</li>
        <li>IS910504761513050489703066</li>
        <li>
          GT56L180294553XIYM37I4VUK22P
          <ul>
            <li>GE19NU0055832300700183</li>
            <li>IT23Z007800204920F69A15207U</li>
            <li>
              GR5881053675549B34227134K84
              <ul>
                <li>RS04412195508007060635</li>
                <li>LU247317W7556449M627</li>
                <li>IT52V0398100921928K90361015</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <ol>
        <li>Reginald Larson</li>
        <li>Mabel Bednar</li>
        <li>
          Mrs. Joanna Rodriguez
          <ol>
            <li>Rolando Keebler MD</li>
            <li>Willard Breitenberg</li>
            <li>
              Emilio O'Reilly
              <ol>
                <li>NL57AVIN4663004009</li>
                <li>AT232807699432464524</li>
                <li>IT98P08944146414053G342H6BN</li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>
    </>
  )
};
