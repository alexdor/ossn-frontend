/* eslint-disable */
/*
  LeaderToolList, LeaderTool and AllLeaderTools components.
  Appears at /leaders-corner.
*/
import React from 'react';
import {Briefcase, FileText, Archive, Clipboard, ExternalLink} from 'react-feather';
import MediaQuery from 'react-responsive';

// Local modules.
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import ShadowBox from './../shadow-box/shadow-box';

import './leader-tools-list.scss';
import './leader-tools.scss';

//  A single tool entry.
const LeaderTool = (props) => {
  const title = props.tool.title;
  const icon = props.tool.imageUrl;
  const url = props.tool.link;

  return (
    <div className="leader-tool">
      <img src={icon} className="leader-tool__icon"/>
      <a href={url} className="leader-tool__link">
        <div className="leader-tool__title"> {title} </div>
        <ExternalLink className="leader-tool__link-icon"/>
      </a>
    </div>
  );
};

// Wraps a list of tools with title.
export class LeaderToolList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  getSimpleHeader() {
    return <span> {this.props.title} </span>;
  }

  getResponsiveHeader() {
    const button = (
      <button onClick={()=>this.handleOpen()} className="leader-tools-list__title-button">
        {this.getSimpleHeader()}
        <span className="leader-tools-list__title-symbol">
          {this.state.isOpen ? '-' : '+'}
        </span>
      </button>
    );

    return button;
  }

  handleOpen() {
    const snapshot = {...this.state};
    this.setState({isOpen: !snapshot.isOpen})
  }

  render() {
    const snapshot = {...this.state};
    const title = this.props.title;

    const tools = this.props.tools.map((tool, i) => {
      return <LeaderTool tool={tool} key={i} />
    });

    const listClasses = ['leader-tools-list__wrapper'];
    if (snapshot.isOpen) listClasses.push('leader-tools-list__wrapper--open');

    return (
      <div className={listClasses.join(' ')} >
          <h2 className="leader-tools-list__title">
            {this.props.icon ? <this.props.icon className="leader-tools-list__title-icon" /> : ''}
            {this.props.isMobile ? this.getResponsiveHeader() : this.getSimpleHeader()}
          </h2>
          <ShadowBox zeroRadius zeroPadding className="leader-tools-list__content-wrapper">
            <div className="leader-tools-list"  hidden={!snapshot.isOpen && this.props.isMobile}>
              {tools}
            </div>
        </ShadowBox>
      </div>
    )
  }
}

// Wraps all the tool lists.
export const AllLeaderTools = (props) => {
  const variousTools = props.variousTools;
  const prManagement = props.prManagement;
  const codeOfConduct = props.codeOfConduct;
  const usefulResources = props.usefulResources;

  return (
    <Layout2Col verticalGutters horizontalGutters>
      <div>
        <MediaQuery minWidth={768}>
          <LeaderToolList title="Project Management Tools" tools={prManagement} icon={Briefcase} />
          <LeaderToolList title="Code of conduct" tools={codeOfConduct} icon={FileText} />
          <LeaderToolList title="Various tools" tools={variousTools} icon={Archive} />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
         <LeaderToolList isMobile title="Project Management Tools" tools={prManagement} icon={Briefcase} />
         <LeaderToolList isMobile title="Code of conduct" tools={codeOfConduct} icon={FileText} />
         <LeaderToolList isMobile title="Various tools" tools={variousTools} icon={Archive} />
       </MediaQuery>
      </div>
      <div>
        <MediaQuery minWidth={768}>
          <LeaderToolList title="Useful resources running a club"
                          tools={usefulResources} icon={Clipboard}/>
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <LeaderToolList isMobile title="Useful resources running a club"
                            tools={usefulResources} icon={Clipboard}/>
        </MediaQuery>
      </div>
    </Layout2Col>
  )
};
