import React from "react";
import { Box } from "@chakra-ui/react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const conclaves = {
	INNOVATORS: "INNOVATORS",
	STARTUP: "STARTUP",
	SUSTAINABILITY: "SUSTAINABILITY",
	YOUTH: "YOUTH",
};

function ConclaveAnimation({ setActiveConclave }) {
	const { rive, RiveComponent } = useRive({
		src: "/assets/conclavesAnimation.riv",
		stateMachines: "GrowStateMachine",
		autoplay: true,
	});

	const activeElInput = useStateMachineInput(rive, "GrowStateMachine", "Active El");

	return (
		<Box height="100%" width="80%">
			<RiveComponent
				style={{ height: "100%" }}
				onClick={() => {
					const index = activeElInput.value;
					switch (index) {
						case 1:
							setActiveConclave(conclaves.SUSTAINABILITY);
							break;
						case 2:
							setActiveConclave(conclaves.STARTUP);
							break;
						case 3:
							setActiveConclave(conclaves.INNOVATORS);
							break;
						case 4:
							setActiveConclave(conclaves.YOUTH);
							break;
						default:
							console.error("Unexpected input");
					}
				}}
			/>
		</Box>
	);
}

export default ConclaveAnimation;
