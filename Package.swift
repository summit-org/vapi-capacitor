// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "VapiCapacitor",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "VapiCapacitor",
            targets: ["VapiPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "VapiPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/VapiPlugin"),
        .testTarget(
            name: "VapiPluginTests",
            dependencies: ["VapiPlugin"],
            path: "ios/Tests/VapiPluginTests")
    ]
)
