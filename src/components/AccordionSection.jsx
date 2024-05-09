import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import React from "react";

export default function AccordionSection() {
  return (
    <Accordion width="581px">
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  mb={3}
                  mt={3}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    color: "#1C1C1C",
                  }}
                >
                  Do you offer freelancers?
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  mb={3}
                  mt={3}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    color: "#1C1C1C",
                  }}
                >
                  What’s the guarantee that I will be satisfied with the hired
                  talent?
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  mb={3}
                  mt={3}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    color: "#1C1C1C",
                  }}
                >
                  Can I hire multiple talents at once?
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              If unhappy with a project, communicate with the freelancer, allow
              for revisions, and refer to the agreement. Escalate to platform
              support if needed, considering mediation. Review policies, seek
              collaborative solutions for resolution.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  mb={3}
                  mt={3}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    color: "#1C1C1C",
                  }}
                >
                  Why should I not go to an agency directly?
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  mb={3}
                  mt={3}
                  style={{
                    fontFamily: "Manrope",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "28px",
                    color: "#1C1C1C",
                  }}
                >
                  Who can help me pick a right skillset and duration for me?
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="12px" />
                ) : (
                  <AddIcon fontSize="12px" />
                )}
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
}
