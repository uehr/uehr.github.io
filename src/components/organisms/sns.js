import React from 'react';
import '../../assets/css/section.css';
import Section from '../molecules/section.js';
import SNSLink from '../../components/atoms/sns-link.js'

function SNS() {
    return (
        <Section
            headline={
                {
                    "title": "SNS",
                    "fontawesome": ["fas", "user-friends"]
                }
            }
            className="sns"
            body={
                <div className="sns-links text-center">
                    <div className="d-inline-block mx-3">
                        <SNSLink
                            link="https://twitter.com/uehr37"
                            fontawesome={["fab", "twitter"]}
                            text=" Twitter"
                            color="#1DA1F2"
                        />
                    </div>
                    <div className="d-inline-block mx-3">
                        <SNSLink
                            link="https://github.com/uehr"
                            fontawesome={["fab", "github"]}
                            text=" Github"
                            color="#24292E"
                        />
                    </div>
                    <div className="d-inline-block mx-3">
                        <SNSLink
                            link="https://qiita.com/uehr"
                            fontawesome={["fas", "feather-alt"]}
                            text=" Qiita"
                            color="#55C500"
                        />
                    </div>
                </div>
            }
        />
    );
}

export default SNS;