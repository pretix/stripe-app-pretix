import {
    Box,
    Link,
    Divider,
    Icon,
    Inline,
    SettingsView
} from "@stripe/ui-extension-sdk/ui";

const AppSettings = () => {
    return (
        <SettingsView>
            <Box css={{
                marginBottom: "large",
            }}>
                <Box
                    css={{
                        font: "heading",
                        stack: "x",
                        alignY: "center",
                        gap: "small",
                        marginBottom: "small",
                    }}
                >
                    <Icon name="sparkle"/>
                    Welcome!
                </Box>
                <Box css={{
                    marginBottom: "small",
                }}>
                    <Inline css={{fontWeight: "bold"}}>Step 1: </Inline>
                    Configure the integration in your pretix event at "Settings" → "Payment" → "Stripe".
                </Box>
                <Box css={{
                    marginBottom: "small",
                }}>
                    <Inline css={{fontWeight: "bold"}}>Step 2: </Inline>
                    Go to your <Link href="https://dashboard.stripe.com/webhooks">Webhook settings</Link> in Stripe
                    dashboard and create a webhook that points to:
                </Box>
                <Box css={{
                    marginBottom: "small",
                    background: "container",
                    padding: "small"
                }}>
                    https://&lt;your-pretix-domain&gt;/_stripe/webhook/
                </Box>
                <Box css={{
                    marginBottom: "small",
                }}>
                    You can select "All events" when creating the webhook.
                </Box>
            </Box>
            <Divider/>
            <Box css={{
                marginTop: "large"
            }}>
                <Box
                    css={{
                        font: "heading",
                        stack: "x",
                        alignY: "center",
                        gap: "small",
                        marginBottom: "small",
                    }}
                >
                    <Icon name="trash"/>
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
