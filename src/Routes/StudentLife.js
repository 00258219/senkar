import React from 'react';
import { FormattedMessage } from 'react-intl';
import Program from "../Components/Program.js"
import AllPrograms from "../Components/AllPrograms.js"

function StudentLife() {
  return (
    <div>
      <h1><FormattedMessage id="sl.tittle"/></h1>
      <p className="p-h3"><FormattedMessage id="sl.proyectsP"/></p>

      {
        AllPrograms.map((val, ind) => <Program tittle={val.tittle} codeP={val.code} fullB={val.fullB} key={ind}></Program> )
      }

      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
      <p>
        Morbi quis commodo odio aenean. Tempor orci eu lobortis elementum nibh
        tellus molestie. Ornare arcu odio ut sem. Malesuada nunc vel risus commodo
        viverra maecenas accumsan. Eros in cursus turpis massa tincidunt dui ut ornare.
        Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Sit amet massa
        vitae tortor condimentum lacinia. Tristique et egestas quis ipsum suspendisse ultrices
        gravida dictum. Pretium quam vulputate dignissim suspendisse in est. Consequat mauris
        nunc congue nisi vitae. Luctus accumsan tortor posuere ac ut. Eget lorem dolor sed viverra
        ipsum. Etiam erat velit scelerisque in dictum non consectetur. Vestibulum lectus mauris
        ultrices eros in cursus turpis massa.
      </p>
    </div>
  );
}

export default StudentLife;
