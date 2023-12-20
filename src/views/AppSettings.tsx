import {
    Box,
    Button,
    Divider,
    Icon,
    SettingsView
} from "@stripe/ui-extension-sdk/ui";

const AppSettings = () => {
    return (
        <SettingsView>
            <Box
                css={{
                    background: "container",
                    padding: "large",
                    borderRadius: "medium",
                    width: "fit"
                }}
            >
                <Box
                    css={{
                        font: "heading",
                        stack: "x",
                        alignY: "center",
                        gap: "small",
                        marginBottom: "small",
                    }}
                >
                    <Icon name="sparkle" />
                    Welcome!
                </Box>
                <Box>
					There are no settings for pretix here. You can configure the integration in your
					pretix event at Setings → Payment → Stripe.
                </Box>
            </Box>
        </SettingsView>
    );
};

export default AppSettings;
