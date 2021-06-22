import React from 'react';
import { submissions } from '../../../state/actions';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import Weekly from './Weekly';

const WeeklySubmissions = (props) => {
  const { authState } = useOktaAuth();

  console.log('this is props', props)
  
  return (
    <>
      <div className="weekly-sub-container">
        <span className="label">
          <h3 className="h3">Week</h3>
          <h3 className="h3"> View Prompt </h3>
        </span>
        <div className="submissions">
          {props.data.map((child, i) => {
            console.log('this is child', child)
            return (
              <Weekly key={i}
              childId={child.children_id}
              writing={child.WritingUrl}
              pagenum={child.PageNum}
              drawing={child.DrawingUrl}
             />)})}
        </div>
      </div>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(WeeklySubmissions);