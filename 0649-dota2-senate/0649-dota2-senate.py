class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        senate = list(senate)
        radiants, dires = deque(), deque()

        for i, c in enumerate(senate):
            if c == 'R':
                radiants.append(i)
            else:
                dires.append(i)

        while radiants and dires:
            radTurn = radiants.popleft()
            direTurn = dires.popleft()

            if radTurn < direTurn:
                radiants.append(radTurn + len(senate))
            else:
                dires.append(direTurn + len(senate))

        return "Radiant" if radiants else "Dire"