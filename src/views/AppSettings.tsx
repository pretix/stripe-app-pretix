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
                    You can use this space to welcome your users and direct them to your setup
                    documentation. Make sure to add the correct links below.
                </Box>
                <Box
                    css={{
                        stack: "x",
                        gap: "small",
                        marginTop: "medium",
                    }}
                >
                    <Button type="primary" target="blank" href="https://stripe.com">
                        View setup instructions
                        <Icon name="external" />
                    </Button>
                    <Button target="blank" href="">
                        Learn more
                        <Icon name="external" />
                    </Button>
                </Box>
            </Box>
            <Box css={{ marginTop: "large" }}>
                <Box css={{ font: "heading", marginBottom: "small" }}>
                    Additional settings
                </Box>
                <Divider />
                <Box css={{ font: "body", marginTop: "medium" }}>
                    If there are no additional settings for your app, you can delete this
                    section.
                </Box>
            </Box>
        </SettingsView>
    );
};

export default AppSettings;