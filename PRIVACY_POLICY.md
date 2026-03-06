# Inferly Privacy Policy

Last updated: March 5, 2026

This Privacy Policy explains how Inferly (the "App") collects, uses, stores, and deletes data when used on Reddit.

Inferly is a Reddit Devvit app. Inferly stores app data in Reddit's Devvit infrastructure (Redis) and uses Reddit platform APIs to create and interact with Reddit content.

## 1) What data Inferly stores (and collects)

Inferly stores the minimum data needed to run the game, including:

- **Identifiers and linkage**
  - Your Reddit user ID (a platform identifier like `t2_...`) for per-user gameplay state, deletion, and rate limiting.
  - Your Reddit username for attribution on community puzzle posts and for in-app display where applicable.
  - Subreddit name, post IDs, puzzle IDs, and timestamps needed to link puzzles to Reddit posts and power archives.
- **Gameplay**
  - Attempts, solved state, and related timestamps needed to run gameplay, show solved indicators, and compute leaderboards.
  - Per-puzzle aggregate counters (for example, total plays and total solved count).
- **User-generated content (UGC)**
  - Puzzle title, four clues, and the canonical answer submitted by a puzzle creator.
  - Reports and moderation-related fields (for example, report counts, removal markers, and moderation audit entries).

Inferly does not require external account linking.

## 2) Why Inferly uses this data

Inferly uses stored data to:

- Run puzzles and validate answers.
- Show archives, solved indicators, plays/solved counts, and leaderboards.
- Support community puzzle creation and reporting workflows.
- Enforce publish limits and rate limits to prevent spam and abuse.
- Maintain operational reliability (for example, reconciliation and cleanup tasks).

## 3) Where data is stored

- Inferly stores app data in Reddit Devvit infrastructure (Redis).
- Inferly does not operate a separate external database for gameplay data.

## 4) What becomes public on Reddit

Inferly runs inside Reddit communities, and some actions create or interact with public Reddit content:

- **Daily puzzles** are represented by Reddit posts created by the app.
- **Community puzzles (UGC)** are represented by Reddit posts created through Inferly. UGC post titles include the puzzle title and the creator's username (for example, "`My Puzzle | by example_user`").
- **Sharing results**: if you choose to share a solve result, Inferly creates a comment on the puzzle post with a short result summary and any optional note you enter.

Content posted to Reddit is governed by Reddit's own rules and policies. Deleting your Inferly app data does not necessarily remove posts or comments already published on Reddit.

## 5) Data sharing

Inferly does not sell personal data. Inferly does not send your app data to third-party analytics or advertising services.

Inferly shares information with Reddit as needed to operate, for example:

- Creating posts and comments via Reddit APIs.
- Forwarding player reports of community puzzles to Reddit moderation queues (for moderators to review in Mod Tools).

## 6) User controls and deletion

Inferly provides user-accessible deletion controls for app-stored data:

- **Delete My Data**: removes per-user app data stored in Devvit Redis (gameplay progress, leaderboard membership, per-user indexes, and limiter keys).
- **Delete a puzzle you created**: removes that puzzle from Inferly archive surfaces and removes internal app linkage. The underlying Reddit post may still exist. If you want the post removed, use Reddit's native post deletion tools (when available) or contact the subreddit moderators.

Inferly also honors platform moderation events. For example, if a community puzzle post is removed in Mod Tools, it will no longer appear in Inferly community archives.

## 7) Retention

Inferly uses a 30-day sliding retention window for app-stored per-user gameplay identifiers in Devvit Redis.

- Player activity refreshes retention for active gameplay keys.
- If a player is inactive for 30 days, scheduled pruning deletes app-stored per-user gameplay keys and index references.
- User-initiated deletion requests are supported through the in-app Delete My Data flow.

Some data may be retained longer for the game to function or for safety and integrity:

- **Aggregate counters** (for example, total plays/solves per puzzle) may be retained for analytics and game balance.
- **Moderation audit entries** may be retained to provide a minimal trace of moderation and deletion actions.

## 8) Security

Inferly uses platform-provided controls and follows least-privilege app permissions for required features.

## 9) Children

Inferly is not directed to children under the minimum age required by applicable law and Reddit policies.

## 10) Policy changes

This policy may be updated from time to time. The "Last updated" date will reflect the latest version.

## 11) Contact

For privacy questions about Inferly, contact the app developer through the associated Reddit developer profile or the support contact configured for the app listing.
