// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export * from "./argFunction";
export * from "./barResource";
export * from "./fooResource";
export * from "./otherResource";
export * from "./provider";
export * from "./resource";
export * from "./typeUses";

// Export sub-modules:
import * as types from "./types";

export {
    types,
};

// Import resources to register:
import { BarResource } from "./barResource";
import { OtherResource } from "./otherResource";
import { Resource } from "./resource";
import { TypeUses } from "./typeUses";
import { FooResource } from "./fooResource";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "bar::BarResource":
                return new BarResource(name, <any>undefined, { urn })
            case "example::OtherResource":
                return new OtherResource(name, <any>undefined, { urn })
            case "example::Resource":
                return new Resource(name, <any>undefined, { urn })
            case "example::TypeUses":
                return new TypeUses(name, <any>undefined, { urn })
            case "foo::FooResource":
                return new FooResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("example", "", _module)

import { Provider } from "./provider";

pulumi.runtime.registerResourcePackage("example", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:example") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
