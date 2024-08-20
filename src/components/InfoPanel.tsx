                      import React from 'react';
                      import styled from 'styled-components';

                      interface PanelContainerProps {
                        isOpen: boolean;
                      }

                      const PanelContainer = styled.div<PanelContainerProps>`
                        position: fixed;
                        right: 0;
                        top: 0;
                        width: 300px;
                        height: 100%;
                        background-color: white;
                        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
                        padding: 20px;
                        transform: translateX(${props => props.isOpen ? '0' : '100%'});
                        transition: transform 0.3s ease-in-out;
                        overflow-y: auto;
                      `;

                      interface StageData {
                        label: string;
                        description: string;
                        skills: string[];
                        experience: string;
                        education: string[];
                        salary: string;
                      }

                      interface InfoPanelProps {
                        isOpen: boolean;
                        onClose: () => void;
                        stageData: StageData | null;
                      }

                      const InfoPanel: React.FC<InfoPanelProps> = ({ isOpen, onClose, stageData }) => {
                        if (!stageData) return null;

                        return (
                          <PanelContainer isOpen={isOpen}>
                            <button onClick={onClose}>Close</button>
                            <h2>{stageData.label}</h2>
                            <p><strong>Description:</strong> {stageData.description}</p>
                            <h3>Required Skills:</h3>
                            <ul>
                              {stageData.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                              ))}
                            </ul>
                            <p><strong>Experience:</strong> {stageData.experience}</p>
                            <h3>Education:</h3>
                            <ul>
                              {stageData.education.map((edu, index) => (
                                <li key={index}>{edu}</li>
                              ))}
                            </ul>
                            <p><strong>Salary Range:</strong> {stageData.salary}</p>
                          </PanelContainer>
                        );
                      };

                      export default InfoPanel;