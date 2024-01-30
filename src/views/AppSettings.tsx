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
                    <Icon name="trash" />
                    How to disconnect
                </Box>
                <Box>
					You can disconnect the same way as you connect, just remove the API keys from
					your pretix event at Settings → Payment → Stripe and pretix will make no more
					requests to Stripe. If you want to fully remove access, use the "Uninstall"
					button above.
                </Box>
            </Box>
        </SettingsView>
    );
};

export default AppSettings;
